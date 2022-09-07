import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Index(props) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get(
                "http://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {users.map((user, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card">
                                <div className="card-header">{user.name}</div>
                                <div className="card-body">
                                    <div>{user.email}</div>
                                    <a
                                        href={`http://${user.website}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {user.website}
                                    </a>
                                    <div>{user.username}</div>
                                    <NavLink
                                        to={`/users/${user.id}`}
                                        className="btn btn-primary mt-2 d-block"
                                    >
                                        View User
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Index;
