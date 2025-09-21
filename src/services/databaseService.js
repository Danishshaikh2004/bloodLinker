import { 
  doc, 
  getDoc, 
  updateDoc, 
  setDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';
import { db } from './firebase';

export class DatabaseService {
  // Get user profile data
  static async getUserProfile(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, error: 'User not found' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Update user profile
  static async updateUserProfile(uid, updates) {
    try {
      await updateDoc(doc(db, 'users', uid), {
        ...updates,
        updatedAt: new Date().toISOString()
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get all users (for admin purposes)
  static async getAllUsers() {
    try {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const users = [];
      usersSnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Search users by blood group
  static async searchUsersByBloodGroup(bloodGroup) {
    try {
      const q = query(collection(db, 'users'), where('bloodGroup', '==', bloodGroup));
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Search users by location
  static async searchUsersByLocation(location) {
    try {
      const q = query(collection(db, 'users'), where('location', '==', location));
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Real-time listener for user data
  static listenToUserProfile(uid, callback) {
    return onSnapshot(doc(db, 'users', uid), (doc) => {
      if (doc.exists()) {
        callback({ success: true, data: doc.data() });
      } else {
        callback({ success: false, error: 'User not found' });
      }
    });
  }

  // Update last donation date
  static async updateLastDonation(uid, donationDate) {
    try {
      await updateDoc(doc(db, 'users', uid), {
        lastDonation: donationDate,
        updatedAt: new Date().toISOString()
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
