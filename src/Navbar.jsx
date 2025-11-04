import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // ✅ Hide navbar on login and signup pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>MyApp</Link>

      <div style={styles.links}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={{ ...styles.button, background: '#5563DE' }}>Login</Link>
            <Link to="/signup" style={{ ...styles.button, background: '#74ABE2' }}>Signup</Link>
          </>
        ) : (
          <>
            <Link to="/me" style={{ ...styles.button, background: '#5563DE' }}>Profile</Link>
            <button onClick={handleLogout} style={{ ...styles.button, background: '#E14E4E' }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    background: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    zIndex: 100,
  },
  logo: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#5563DE',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
  },
};

export default Navbar;
