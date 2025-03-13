import { ReservationTable } from "../components/ReservationTable";
import StatCard from "../components/StatCard";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const DashBoard = () => {
    const { user } = useContext(AuthContext);
    return (<div className="dashboard">
        <header className="dashboard__header">
            <h1>Dashboard {user.username}</h1>
            <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
        </header>

        <div className="dashboard__grid">
            <StatCard
                title="Total Reservations"
                value="156"
                trend={{ value: 12, isPositive: true }}
            />
            <StatCard
                title="Total Revenue"
                value="$45,678"
                trend={{ value: 8, isPositive: true }}
            />
            <StatCard
                title="Active Guests"
                value="24"
                trend={{ value: 3, isPositive: false }}
            />
        </div>

        <ReservationTable />
    </div>)
};
