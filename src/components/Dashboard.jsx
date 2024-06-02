import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import data from '../utils/data.json';
import {
  getAlertsPerSignature,
  getAlertsPerCategory,
  getAlertsOverTime,
  getSSHClientSoftwareVersions,
  getSSHServerSoftwareVersions,
} from '../utils/dataFormat';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const alertsPerSignature = getAlertsPerSignature(data);
  const alertsPerCategory = getAlertsPerCategory(data);
  const alertsOverTime = getAlertsOverTime(data);
  const sshClientVersions = getSSHClientSoftwareVersions(data);
  const sshServerVersions = getSSHServerSoftwareVersions(data);

  return (
    <div style={{ backgroundColor: '#2e2e2e', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <h1>Dashboard</h1>

      {/* Bar Chart for Alerts per Signature */}
      <div style={{ marginBottom: '50px' }}>
        <h2>Alerts per Signature</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={alertsPerSignature}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="signature" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Alerts per Category */}
      <div style={{ marginBottom: '50px' }}>
        <h2>Alerts per Category</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={alertsPerCategory} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
              {alertsPerCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart for Alerts over Time */}
      <div style={{ marginBottom: '50px' }}>
        <h2>Alerts over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={alertsOverTime}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart for SSH Client Software Versions */}
      <div style={{ marginBottom: '50px' }}>
        <h2>SSH Client Software Versions</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sshClientVersions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="version" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart for SSH Server Software Versions */}
      <div style={{ marginBottom: '50px' }}>
        <h2>SSH Server Software Versions</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sshServerVersions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="version" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;