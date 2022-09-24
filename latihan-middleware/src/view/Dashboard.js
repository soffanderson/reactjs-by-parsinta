import React from "react";
import Autenticated from "../middleware/Autenticated";

function Dashboard(props) {
    return (
        <Autenticated>
            <div className="container">Dashboard</div>
        </Autenticated>
    );
}
export default Dashboard;
