import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Form from "./Form";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [modifiedData, setMData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //   console.log(res.data);
      setUserData(res.data);
    });
  }, []);
  //   console.log(userData);

  const clickevent = (id) => {
    const values = {
      email: "humesh@gmail.com",
      hobby: "cricket",
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
      .then((res) => {
        setMData(res.data);
      });
  };
  console.log(modifiedData);
  return (
    <>
      <h1>User Table</h1>
      {/* <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {userData
            ? userData.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td></td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      {data.address.street}, {data.address.city}
                    </td>
                    <td>
                      <button onClick={() => clickevent(data.id)}>click</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table> */}

      <ul>{modifiedData ? <li>{modifiedData.hobby}</li> : null}</ul>
      {/* <button onClick={clickevent}>click</button> */}

      <Form />
    </>
  );
};

export default App;
