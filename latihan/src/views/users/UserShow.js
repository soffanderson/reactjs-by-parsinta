import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserShow(props) {
    const [user, setUser] = useState([]);
    let { identifier } = useParams();

    const getUser = async () => {
        try {
            let response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${identifier}`
            );
            setUser(response.data);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getUser();
    }, [identifier]);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <div>{user.website}</div>
                    <div>{user.username}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                </div>
            </div>
        </div>
    );
}

export default UserShow;
