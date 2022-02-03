import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  email: "",
  id: "",
  username: "",
  address:"",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Incomplete data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  
  return (
    <div className="container">
      <div >
        <div className="contbutton" >
          <h3 className="item"  >User list</h3>
          <button className="item"   className="buttonadd" >Add new</button>
        </div>
   
          <form className="mainform" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={form.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />
            <input
              style={{ display: dataToEdit ? "inline" : "none" }}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={form.username}
            />
              <input
              style={{ display: dataToEdit ? "inline" : "none" }}
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              value={form.address.city}
            />

            <input className="formbutton1"type="submit" value="Send" />
            <input className="formbutton2" type="reset" value="Reset" onClick={handleReset} />
          </form>
        
      </div>
    </div>
  );
};

export default CrudForm;
