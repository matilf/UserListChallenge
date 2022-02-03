import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, email, id, username, address } = el;

  
  return (
    <tr >
       
      <td>{id}</td>
      <td>{name}</td>
      <td> {username}</td>
      <td>{email}</td>
      <td>{address.city}</td>

      

      <td>
        
        <button className="buttonedit"  onClick={( ) =>  setDataToEdit(el)}>Edit</button>
      
      </td>
      
      <td>
      <button className="buttondelete " onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
