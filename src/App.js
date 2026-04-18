import React, { useState, useMemo } from 'react';
import './App.css';

const DataGrid = React.memo(({ title, items }) => {
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);

  return (
    <div className="data-grid-container">
      <h3 className="grid-title">{title}</h3>
      <ul className="data-list">
        {sortedItems.map((item, idx) => (
          <li key={idx} className="list-item" data-testid="list-item">
            <span className="item-icon">📄</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const dataset = useMemo(() => [
    "Application Analytics",
    "Bandwidth Usage",
    "Customer Demographics",
    "Database Logs",
    "Engagement Metrics"
  ], []);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="dashboard-layout">
      <nav className="navbar">
        <div className="brand">FS Exp-2 Dashboard</div>
        <button 
          className="info-button"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Experiment Information"
        >
          ℹ️ Info
        </button>
      </nav>

      {showInfo && (
        <div className="info-card fade-in">
          <div className="info-header">
            <h3>About This Experiment</h3>
            <button className="close-btn" onClick={() => setShowInfo(false)}>✕</button>
          </div>
          <div className="info-content">
            <p><strong>Experiment 1.2 Overview:</strong></p>
            <ul>
              <li><strong>Unit Testing:</strong> Verified with Jest and React Testing Library.</li>
              <li><strong>Debugging:</strong> Contains hooks for Chrome DevTools inspection.</li>
              <li><strong>Performance:</strong> Uses <code>React.memo</code> and <code>useMemo</code> for optimal rendering, verifiable via Lighthouse.</li>
            </ul>
          </div>
        </div>
      )}

      <main className="main-content">
        <section className="control-panel card">
          <h2>Metrics Counter</h2>
          <div className="counter-display">
            <span className="count-value" data-testid="counter-display">{count}</span>
            <span className="count-label">Active Sessions</span>
          </div>
          <button 
            className="action-button primary" 
            onClick={handleIncrement} 
            data-testid="increment-button"
          >
            Increment Sessions
          </button>
        </section>

        <section className="search-panel card">
          <h2>Filter Records</h2>
          <div className="search-wrapper">
            <input 
              type="text" 
              className="search-input"
              placeholder="Search databases..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <p className="helper-text">Typing here will not trigger re-renders of the Data Grid below due to optimizations.</p>
          </div>
        </section>

        <section className="grid-panel card">
          <DataGrid title="System Databases" items={dataset} />
        </section>
      </main>
    </div>
  );
}

export default App;
