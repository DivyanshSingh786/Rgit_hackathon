import React from 'react';
import { useNavigate } from 'react-router-dom';


const PendingData = ({data,index,count}) => {

    const navigate= useNavigate();
    console.log(count)
  return (
    <tr>
                <th scope="row">{count}</th>
                <td><p style={{textDecoration: "none",cursor:"pointer"}} onClick={(e)=>navigate('/ticketDetail',{state:{data}})}>{data.title}</p></td>
                <td>{data.senderrole}</td>
                <td>{data.sendername}</td>
                <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                <td><button type="button" class="btn btn-info btn-sm">Edit</button></td>
              </tr>
  );
}

export default PendingData;
