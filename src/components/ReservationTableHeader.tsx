import { useContext, useState } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddRevenuModal from "./AddRevenuModal";
import { statusOptions } from "./StatusSelection";

export const ReservationTableHeader = () => {
    const { searchGlobalReservations, searchGuestReservations, searchDateReservations, searchStatusReservations, searchAmountReservations } = useContext(ReservationContext);
    const [openAddRevenuModal, setOpenAddRevenuModal] = useState(false);

    return (
        <>
            <div className="dashboard__table-header">
                <TextField label="Global search" variant="outlined" onChange={(e) => searchGlobalReservations(e.target.value)} />
                <div className="dashboard__table-header-filters">
                    <TextField className="dashboard__table-header-filters-guest" label="Guest" variant="outlined" onChange={(e) => searchGuestReservations(e.target.value)} />
                    <TextField className="dashboard__table-header-filters-date" type="date" variant="outlined" onChange={(e) => searchDateReservations(e.target.value)} />
                    <TextField className="dashboard__table-header-amount" label="Amount" type="number" variant="outlined" onChange={(e) => searchAmountReservations(Number(e.target.value))} />
                    <FormControl className="dashboard__table-header-status" >
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                            onChange={(e) => searchStatusReservations(e.target.value as 'pending' | 'confirmed' | 'cancelled' | '')}
                        >
                            <MenuItem value="">
                                <span className="status status--all">
                                    All
                                </span>
                            </MenuItem>
                            {statusOptions.map((statusOption) => (
                                <MenuItem value={statusOption}>
                                    <span className={`status status--${statusOption}`}>
                                        {statusOption}
                                    </span>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <Button variant="contained" color="primary" onClick={() => setOpenAddRevenuModal(true)}>Add income</Button>
            </div>
            <AddRevenuModal open={openAddRevenuModal} onClose={() => setOpenAddRevenuModal(false)} />
        </>
    )
}