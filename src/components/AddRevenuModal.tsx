import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AddRevenu } from './AddRevenu';

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
}

export default function AddRevenuModal({ open, onClose }: Props) {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddRevenu onClose={onClose} />
                </Box>
            </Modal>
        </div>
    );
}
