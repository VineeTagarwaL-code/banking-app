import React from 'react';
import './Transfer.css';

function Transfer({ record }) {
  return (
    <div className="tranferCont">
      <table id="transferTable">
        <thead>
          <tr>
            <th>User</th>
            <th>Transfer By</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {record.map((detail, index) => (
            <tr key={index}>
              <td>{detail.user}</td>
              <td>{detail.transferBy}</td>
              <td>{detail.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transfer;
