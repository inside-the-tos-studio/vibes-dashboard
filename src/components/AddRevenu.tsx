import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { SelectChangeEvent, TextField } from '@mui/material';
import { Reservation, ReservationContext } from '../context/ReservationContext';

interface FormData {
    name: string;
    firstName: string;
    date: string;
    amount: number;
}

export const AddRevenu = ({ onClose }: { onClose: () => void }) => {
    const { addReservation } = useContext(ReservationContext);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        firstName: '',
        date: '',
        amount: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<unknown>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReservation: Omit<Reservation, "id"> = {
            guest: formData.name + ' ' + formData.firstName,
            date: formData.date,
            amount: formData.amount,
            status: 'pending',
        };
        addReservation(newReservation);
        onClose();
    };

    return (
        <div className='add-revenue-card'>
            <h1 className="signin-title">Ajouter un revenu</h1>
            <form onSubmit={handleSubmit} className="add-revenue-form">
                <div className="form-group">
                    <h2>Nom: </h2>
                    <TextField
                        required
                        id="outlined-required"
                        name="name"
                        label="Nom"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <h2>Prénom: </h2>
                    <TextField
                        required
                        id="outlined-required"
                        name="firstName"
                        label="Prénom"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <h2>Date: </h2>
                    <TextField
                        required
                        id="outlined-required"
                        name="date"
                        type="date"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group" >
                    <h2>Montant: </h2>
                    <TextField
                        required
                        id="outlined-required"
                        name="amount"
                        type="number"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='add-revenue-form-buttons'>
                    <Button variant="outlined" size="small" onClick={onClose} >Close</Button>
                    <Button variant="contained" size="small" onClick={handleSubmit} >Submit</Button>
                </div>
            </form>
        </div>
    );
}