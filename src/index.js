import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import A from './A';
import UserList from './UserList';

const users = [
    {   firstName: 'Andrii',
        lastName: 'Melnyk',
        age: 23,
        address: '44456, Ukraine, Chernivtsi city, Shevchenko str., 32',
        online: true,
        id: '111'
    },
    {   firstName: 'Taras',
        lastName: 'Stepanov',
        age: 45,
        address: '66456, Ukraine, Kharkiv city, Kyrylivska str., 30, apt. 10',
        online: false,
        id: '112'

    },
    {   firstName: 'Anna',
        lastName: 'Shevchenko',
        age: 77,
        address: '77456, Ukraine, Lviv city, Kosmichna str., 13, apt. 355',
        online: true,
        id: '113'

    },
    {   firstName: 'Vasyl',
        lastName: 'Grinenko',
        age: 11,
        address: '28856, Ukraine, Zaporizhzhia city, Sagaydachnoho str., 22',
        online: false,
        id: '114'

    },
];

ReactDOM.render(
  <React.StrictMode>
    <A />
      <UserList userList = {users}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
