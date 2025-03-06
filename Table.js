import React from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent() {
  return (
    <Table style={{ backgroundColor: 'red', color: 'white' }}>
      <thead>
        <tr>
          <th  style={{backgroundColor:'red'}}>#</th>
          <th style={{backgroundColor:'red'}}  >First Name</th>
          <th  style={{backgroundColor:'red'}}>Last Name</th>
          <th  style={{backgroundColor:'red'}}>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  style={{backgroundColor:'red'}}>1</td>
          <td style={{backgroundColor:'red'}}>Mark</td>
          <td  style={{backgroundColor:'red'}}>Otto</td>
          <td style={{backgroundColor:'red'}}>@mdo</td>
        </tr>
        <tr>
          <td style={{backgroundColor:'red'}}>2</td>
          <td style={{backgroundColor:'red'}}>Jacob</td>
          <td style={{backgroundColor:'red'}}>Thornton</td>
          <td style={{backgroundColor:'red'}}>@fat</td>
        </tr>
        <tr>
          <td style={{backgroundColor:'red'}}>3</td>
          <td style={{backgroundColor:'red'}}  colSpan={2}>Larry the Bird</td>
          <td style={{backgroundColor:'red'}}>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;
