import React, { useState } from "react";

const Form = ({ tableData, setTableData }) => {
  const [newData, setNewData] = useState({
    fullName: "",
    userName: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    companyName: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewData({ ...newData, [name]: value });
    console.log(newData);
  };
  //Adding new data to our table
  const Add = (e) => {
    e.preventDefault();
    setTableData([...tableData, { ...newData, id: Math.random() }]); // for giving the new data some random id
    setNewData({
      // for enptying the form
      fullName: "",
      userName: "",
      address: "",
      phoneNumber: "",
      email: "",
      website: "",
      companyName: "",
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form className="input">
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter a name..."
              onChange={Change}
              value={newData.fullName}
              className="form-control-sm col-2 px-2 py-1 fs-4"
            />
            <input
              type="text"
              name="userName"
              required
              placeholder="Enter user name..."
              onChange={Change}
              value={newData.userName}
              className="form-control-sm col-2 px-2 mx-3 py-1 fs-4"
            />
            <input
              type="text"
              name="phoneNumber"
              required
              placeholder="Enter a phone number..."
              onChange={Change}
              value={newData.phoneNumber}
              className="form-control-sm col-2 px-2 mx-3 py-1 fs-4"
            />
            <input
              type="text"
              name="website"
              required
              placeholder="Enter website..."
              onChange={Change}
              value={newData.website}
              className="form-control-sm col-2 px-2 mx-3 py-1 fs-4"
            />
            <input
              type="text"
              name="companyName"
              required
              placeholder="Enter company name..."
              onChange={Change}
              value={newData.companyName}
              className="form-control-sm col-2 px-2 mx-3 py-1 fs-4"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Enter an email..."
              onChange={Change}
              value={newData.email}
              className="form-control-sm col-2 px-2 mx-3 py-1 fs-4"
            />
            <button
              className="btn-primary py-0 px-2 mx-3 col-1 fs-3"
              onClick={Add}
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
