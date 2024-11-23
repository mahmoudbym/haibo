import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './style/Collection.css'; // Import CSS file

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [12000, 15000, 11000, 18000, 20000, 17000, 22000],
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Orders',
        data: [300, 400, 320, 500, 600, 450, 700],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Top Bar */}
      <div className="dashboard__topbar">
        <h1>Admin Dashboard</h1>
        <input type="text" placeholder="Search..." className="dashboard__search" />
      </div>

      {/* Main Content */}
      <div className="dashboard__main">
        {/* Sidebar */}
        <div className="dashboard__sidebar">
          <h2>Menu</h2>
          <ul>
            {['Dashboard', 'Products', 'Orders', 'Analytics', 'Users', 'Settings'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="dashboard__content">
          {/* Overview Stats */}
          <div className="dashboard__stats">
            {[
              { title: 'Total Sales', value: '$25,000' },
              { title: 'Total Orders', value: '1200 Orders' },
              { title: 'Total Customers', value: '500 Users' },
            ].map((stat, index) => (
              <div key={index} className="dashboard__stat">
                <h3>{stat.title}</h3>
                <p>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="dashboard__charts">
            <div className="dashboard__chart">
              <h3>Sales Over Time</h3>
              <Line data={lineChartData} />
            </div>
            <div className="dashboard__chart">
              <h3>Orders Over Time</h3>
              <Bar data={barChartData} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard__footer">
        <p>© 2024 Admin Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
