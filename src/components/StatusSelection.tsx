import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ReservationContext } from '../context/ReservationContext';
import { useContext } from 'react';

type Props = {
    id: string;
}

export const statusOptions = [
    'completed',
    'pending',
    'cancelled',
];

export const StatusSelection = ({ id }: Props) => {
    const { updateReservations, reservations } = useContext(ReservationContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        updateReservations(event.currentTarget.innerText as "completed" | "pending" | "cancelled", id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: 'background.paper' }}
            >
                <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                >
                    <span className={`status status--${reservations.find(reservation => reservation.id === id)?.status}`}>
                        <ListItemText
                            primary={reservations.find(reservation => reservation.id === id)?.status}
                        />
                    </span>
                </ListItemButton>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {statusOptions.map((statusOption, index) => (
                    <MenuItem
                        key={statusOption}
                        className={`status status--${statusOption}`}
                        disabled={statusOption === reservations.find(reservation => reservation.id === id)?.status}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        <span className={`status status--${statusOption}`}>
                            {statusOption}
                        </span>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}