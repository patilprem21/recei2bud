function App() {

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">Receipt2Budget</a>
          <nav className="nav">
            <a href="/" className="nav-link active">Dashboard</a>
            <a href="/upload" className="nav-link">Upload</a>
            <a href="/reports" className="nav-link">Reports</a>
          </nav>
        </div>
      </header>

      <main className="main-layout">
        <div className="main-content">
          <h1>Welcome to Receipt2Budget</h1>
          <p>Upload your receipts and track your expenses automatically!</p>
          
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Quick Upload</h3>
              <p>Upload receipts by photo or PDF</p>
              <button className="btn btn-primary">Upload Receipt</button>
            </div>
            
            <div className="dashboard-card">
              <h3>This Month</h3>
              <p>Total expenses: $0.00</p>
              <button className="btn btn-outline">View Details</button>
            </div>
            
            <div className="dashboard-card">
              <h3>Categories</h3>
              <p>Track spending by category</p>
              <button className="btn btn-outline">View Categories</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Receipt2Budget. Built with React + Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
