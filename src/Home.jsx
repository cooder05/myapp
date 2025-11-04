function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome 👋</h1>
      <p>This is your beautiful new React home page.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    background: 'white',
    padding: '40px 60px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
};

export default Home;
