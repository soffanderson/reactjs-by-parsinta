// useState adalah state untuk function component,

import React, { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React Js</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="fistname" className="form-label">
                      Firstname
                    </label>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="form-label">
                      Lastname
                    </label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                    />
                  </div>
                  <button className="btn btn-block btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer">
                My name is {name ? name : "..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
