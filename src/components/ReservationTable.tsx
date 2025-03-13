import React, { useContext, useState } from 'react';
import { StatusSelection } from './StatusSelection';
import { Reservation, ReservationContext } from '../context/ReservationContext';
import ReservationModal from './ReservationModal';
import { ReservationTableHeader } from './ReservationTableHeader';
export const ReservationTable: React.FC = () => {
  const { reservations } = useContext(ReservationContext);
  const [openReservationModal, setOpenReservationModal] = useState(false);
  const [reservation, setReservation] = useState<Reservation>();

  return (
    <>
      <ReservationTableHeader />
      <div className="dashboard__table">
        <ReservationModal open={openReservationModal} onClose={() => setOpenReservationModal(false)} reservation={reservation} />
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation: Reservation) => (
              <tr key={reservation.id} >
                <td>{reservation.guest}</td>
                <td>{reservation.date}</td>
                <td>${reservation.amount}</td>
                <td><StatusSelection id={reservation.id} /></td>
                <td><button onClick={() => {
                  setReservation(reservations.find((elem: Reservation) => elem.id === reservation.id));
                  setOpenReservationModal(true);
                }}>DETAILS</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};