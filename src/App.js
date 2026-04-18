import React, { useState, useMemo } from 'react';
import './App.css';

const DataGrid = React.memo(({ title, items }) => {
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);

  return (
    <div className="glass-card data-grid-container">
      <h3 className="grid-title">{title}</h3>
      <ul className="data-list">
        {sortedItems.map((item, idx) => (
          <li key={idx} className="list-item glass-item" data-testid="list-item">
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
    <div className="dashboard-layout glass-bg">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <nav className="navbar glass-nav">
        <div className="brand">FS Exp-2 Dashboard</div>
        <button 
          className="info-button glass-btn"
          onClick={() => setShowInfo(true)}
          aria-label="Experiment Information"
        >
          <span className="info-icon">ℹ️</span> Experiment Info
        </button>
      </nav>

      {showInfo && (
        <div className="modal-overlay" onClick={() => setShowInfo(false)}>
          <div className="info-card glass-modal fade-in" onClick={e => e.stopPropagation()}>
            <div className="info-header">
              <h3>Experiment 1.2: React Testing, Debugging & Performance</h3>
              <button className="close-btn" onClick={() => setShowInfo(false)}>✕</button>
            </div>
            <div className="info-content scrollable">
              <h4>Objective</h4>
              <p>Perform React front-end testing and debugging using modern tools.</p>
              
              <h4>a. Unit Testing (Jest & React Testing Library)</h4>
              <p>This project includes a comprehensive test suite (<code>App.test.js</code>). It utilizes <code>render</code>, <code>screen</code>, and <code>fireEvent</code> to verify that elements load correctly, initial states are accurate, and UI interactions (like incrementing the counter) update the DOM as expected.</p>
              
              <h4>b. Debugging (Chrome DevTools)</h4>
              <p>The application has been structured to facilitate debugging. By opening Chrome DevTools (F12) and navigating to the <strong>Sources</strong> tab, you can set breakpoints inside the <code>handleIncrement</code> function or inspect the React component tree using the React Developer Tools extension.</p>
              
              <h4>c. Performance Analysis (Lighthouse & Optimization)</h4>
              <p>Rendering optimization is showcased through the <strong>Data Grid</strong> component below. It is wrapped in <code>React.memo</code>, and its dataset is cached using <code>useMemo</code>. Typing in the search filter updates the parent component's state but skips re-rendering the heavy Data Grid entirely. This optimization results in exceptional Lighthouse performance scores.</p>
            </div>
          </div>
        </div>
      )}

      <main className="main-content z-index-content">
        <section className="control-panel glass-card">
          <h2>Metrics Counter</h2>
          <div className="counter-display glass-inner">
            <span className="count-value" data-testid="counter-display">{count}</span>
            <span className="count-label">Active Sessions</span>
          </div>
          <button 
            className="action-button glass-btn primary-glow" 
            onClick={handleIncrement} 
            data-testid="increment-button"
          >
            Increment Sessions
          </button>
        </section>

        <section className="search-panel glass-card">
          <h2>Filter Records</h2>
          <div className="search-wrapper">
            <input 
              type="text" 
              className="search-input glass-input"
              placeholder="Search databases..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <p className="helper-text glass-inner">Notice: Typing here triggers state updates, but the Data Grid below skips re-rendering thanks to <code>React.memo</code> optimization.</p>
          </div>
        </section>

        <section className="grid-panel">
          <DataGrid title="System Databases" items={dataset} />
        </section>
      </main>
    </div>
  );
}

export default App;
