import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50" style={{backgroundColor: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '16px', paddingRight: '16px'}}>
        <div className="flex justify-between items-center h-16" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px'}}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center" style={{width: '32px', height: '32px', backgroundColor: '#dc2626', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-white font-bold text-sm" style={{color: 'white', fontWeight: '700', fontSize: '14px'}}>BL</span>
            </div>
            <span className="text-xl font-bold text-gray-800" style={{fontSize: '20px', fontWeight: '700', color: '#1f2937'}}>BloodLink</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8" style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'text-red-600' : ''}`}
              style={{color: isActive('/') ? '#dc2626' : '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}
            >
              Home
            </Link>
            <Link
              to="/donate"
              className={`nav-link ${isActive('/donate') ? 'text-red-600' : ''}`}
              style={{color: isActive('/donate') ? '#dc2626' : '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}
            >
              Donate
            </Link>
            <Link
              to="/request"
              className={`nav-link ${isActive('/request') ? 'text-red-600' : ''}`}
              style={{color: isActive('/request') ? '#dc2626' : '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}
            >
              Request
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'text-red-600' : ''}`}
              style={{color: isActive('/contact') ? '#dc2626' : '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className={`nav-link ${isActive('/login') ? 'text-red-600' : ''}`}
              style={{color: isActive('/login') ? '#dc2626' : '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}
            >
              Login
            </Link>
            <Link
              to="/profile"
              className={`nav-link ${isActive('/profile') ? 'text-red-600' : ''}`}
              style={{color: isActive('/profile') ? '#dc2626' : '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease'}}
            >
              Profile
            </Link>
            <Link
              to="/register"
              className="btn-primary"
              style={{backgroundColor: '#dc2626', color: 'white', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', textDecoration: 'none'}}
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" style={{display: 'none'}}>
            <button className="text-gray-700 hover:text-red-600" style={{color: '#374151', background: 'none', border: 'none', cursor: 'pointer'}}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
