import React from 'react';
import { Calendar, DollarSign, Users } from 'lucide-react';
import StatCard from './components/StatCard';
import ReservationTable from './components/ReservationTable';
import './styles/dashboard.scss';

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
      </header>

      <div className="dashboard__grid">
        <StatCard
          title="Total Reservations"
          value="156"
          icon={Calendar}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total Revenue"
          value="$45,678"
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Guests"
          value="24"
          icon={Users}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      <ReservationTable />
    </div>
  );
}

export default App;