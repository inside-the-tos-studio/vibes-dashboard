import Typography from '@mui/material/Typography';
import { Reservation } from '../context/ReservationContext';

export const DetailCard = ({ reservation }: { reservation: Reservation, onClose: () => void }) => {
  return (
    <div className="detail-card">
      <h1 className="signin-title">Income details</h1>
      <Typography sx={{ color: 'text.secondary', fontSize: 24 }}>
        Guest: {reservation.guest}
      </Typography>
      <Typography variant="h5" component="div">
        Date: {reservation.date}
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>Total: ${reservation.amount}</Typography>
      <Typography variant="body2">
        Status:
        <span className={`status status--${reservation.status}`}>
          {reservation.status}
        </span>
      </Typography>
    </div>
  );
}
