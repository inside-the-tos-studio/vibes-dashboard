import { createContext, useState } from 'react';

interface ReservationContextType {
    updateReservations: (status: string, id: string) => void;
    reservations: Reservation[];
    addReservation: (newReservation: Omit<Reservation, "id">) => void;
    searchGlobalReservations: (search: string) => void;
    searchGuestReservations: (search: string) => void;
    searchDateReservations: (date: string) => void;
    searchAmountReservations: (amount: number) => void;
    searchStatusReservations: (status: string) => void;
}

export interface Reservation {
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

const Context: ReservationContextType = {
    reservations: [],
    updateReservations: () => { },
    addReservation: () => { },
    searchGlobalReservations: () => { },
    searchGuestReservations: () => { },
    searchDateReservations: () => { },
    searchAmountReservations: () => { },
    searchStatusReservations: () => { },
}

const ReservationContext = createContext<ReservationContextType>(Context);

const ReservationProvider = ({ children }: { children: React.ReactNode }) => {
    const [reservations, setReservations] = useState<Reservation[]>(mockReservations);

    const updateReservations = (status: string, id: string) => {
        setReservations(reservations.map(reservation => reservation.id === id ? { ...reservation, status: status as "completed" | "pending" | "cancelled" } : reservation));
    }

    const addReservation = (newReservation: Omit<Reservation, "id">) => {
        setReservations([...reservations, { ...newReservation, id: (reservations.length + 1).toString() }]);
    };

    const searchGlobalReservations = (search: string) => {
        setReservations(reservations.filter(reservation => JSON.stringify(reservation).toLowerCase().includes(search.toLowerCase())));
    }

    const searchGuestReservations = (search: string) => {
        setReservations(reservations.filter(reservation => reservation.guest.toLowerCase().includes(search.toLowerCase())));
    }

    const searchDateReservations = (date: string) => {
        setReservations(reservations.filter(reservation => reservation.date.toLowerCase().includes(date.toLowerCase())));
    }

    const searchAmountReservations = (amount: number) => {
        if (amount) {
            setReservations(reservations.filter(reservation => reservation.amount === amount));
        } else {
            setReservations(reservations);
        }
    }

    const searchStatusReservations = (status: string) => {
        if (status === "") {
            setReservations(mockReservations);
        } else {
            setReservations(reservations.filter(reservation => reservation.status === status));
        }
    }

    return (
        <ReservationContext.Provider value={{ reservations, updateReservations, addReservation, searchGlobalReservations, searchGuestReservations, searchDateReservations, searchAmountReservations, searchStatusReservations }}>
            {children}
        </ReservationContext.Provider>
    );
};

export { ReservationContext, ReservationProvider };
