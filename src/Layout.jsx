import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div style={styles.layout}>
      {!hideNavbar && <Navbar />}
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  main: {
    flex: 1,
    padding: '20px',
    background: '#f9fafc',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
};


export default Layout;
