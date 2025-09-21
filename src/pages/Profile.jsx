import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get user data from localStorage (simulating database storage)
    const storedUserData = localStorage.getItem('bloodLinkUser')
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('bloodLinkUser')
    setUserData(null)
    // Redirect to home or login page
    window.location.href = '/'
  }

  if (loading) {
    return (
      <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '4px solid #e5e7eb', borderTop: '4px solid #dc2626', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
          <p style={{ color: '#6b7280' }}>Loading profile...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (!userData) {
    return (
      <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '48px 16px', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '32px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#fef2f2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
              Profile Not Found
            </h2>
            <p style={{ color: '#4b5563', marginBottom: '24px' }}>
              You need to register first to view your profile.
            </p>
            <Link
              to="/register"
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 16px' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '30px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
                My Profile
              </h1>
              <p style={{ color: '#4b5563' }}>Manage your account information</p>
            </div>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Profile Information */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>
            Personal Information
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Full Name */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Full Name
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827'
              }}>
                {userData.fullName}
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Email Address
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827'
              }}>
                {userData.email}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Phone Number
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827'
              }}>
                {userData.phone}
              </div>
            </div>

            {/* Blood Group */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Blood Group
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827',
                fontWeight: '600'
              }}>
                {userData.bloodGroup}
              </div>
            </div>

            {/* Location */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Location
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827'
              }}>
                {userData.location}
              </div>
            </div>

            {/* Last Donation */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Last Donation Date
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827'
              }}>
                {userData.lastDonation ? new Date(userData.lastDonation).toLocaleDateString() : 'Not specified'}
              </div>
            </div>
          </div>

          {/* Registration Date */}
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Member Since
              </label>
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#111827'
              }}>
                {userData.registrationDate ? new Date(userData.registrationDate).toLocaleDateString() : 'Recently'}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '32px', marginTop: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>
            Quick Actions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <Link
              to="/donate"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#dcfce7',
                border: '1px solid #bbf7d0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#166534',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ marginRight: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '16px' }}>Donate Blood</div>
                <div style={{ fontSize: '14px', opacity: '0.8' }}>Save a life today</div>
              </div>
            </Link>

            <Link
              to="/request"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#fef3c7',
                border: '1px solid #fde68a',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#92400e',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ marginRight: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '16px' }}>Request Blood</div>
                <div style={{ fontSize: '14px', opacity: '0.8' }}>Find donors</div>
              </div>
            </Link>

            <Link
              to="/dashboard"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#dbeafe',
                border: '1px solid #bfdbfe',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#1e40af',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ marginRight: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '16px' }}>Dashboard</div>
                <div style={{ fontSize: '14px', opacity: '0.8' }}>View statistics</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
