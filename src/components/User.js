import React from 'react';

const User = ({userInfo}) => {

    const {firstName, lastName, age, address, online} = userInfo;

    return <div>
        <h2 className={online ? 'online' : 'offline'}>{`${firstName} ${lastName}`}</h2>
        <p>{`Age: ${age}`}</p>
        <p>{`Address: ${address}`}</p>
    </div>
};

export default User;
