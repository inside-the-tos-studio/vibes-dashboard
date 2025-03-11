import React from 'react';
import { Calendar, DollarSign, Users } from 'lucide-react';

interface Reservation {
  id: string;
  guest: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
}

const mockReservations: Reservation[] = [
  { id: '1', guest: 'John Smith', date: '2024-03-15', amount: 250, status: 'completed' },
  { id: '2', guest: 'Emma Wilson', date: '2024-03-14', amount: 180, status: 'pending' },
  { id: '3', guest: 'Michael Brown', date: '2024-03-13', amount: 320, status: 'completed' },
  { id: '4', guest: 'Sarah Davis', date: '2024-03-12', amount: 150, status: 'cancelled' },
  { id: '5', guest: 'James Johnson', date: '2024-03-11', amount: 290, status: 'completed' },
];

const ReservationTable: React.FC = () => {
  return (
    <div className="dashboard__table">
      <div className="dashboard__card-header">
        <h2>Recent Reservations</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Guest</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockReservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.guest}</td>
              <td>{reservation.date}</td>
              <td>${reservation.amount}</td>
              <td>
                <span className={`status status--${reservation.status}`}>
                  {reservation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;