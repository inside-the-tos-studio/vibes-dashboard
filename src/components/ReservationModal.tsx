import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { DetailCard } from './DetailCard';
import { Reservation } from '../context/ReservationContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '0 !important',
    p: 4,
};

interface Props {
    open: boolean;
    onClose: () => void;
    reservation?: Reservation;
}

export default function ReservationModal({ open, onClose, reservation }: Props) {
    if (!reservation) return;
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DetailCard reservation={reservation} onClose={onClose} />
                </Box>
            </Modal>
        </div>
    );
}
