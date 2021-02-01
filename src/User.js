import React from 'react';

const User = (props) => {

    const {firstName, lastName, age, address, online} = props.userInfo;

    if(firstName){
        return (
            <div>
                <h2 className={online ? 'online' : 'offline'}>{`${firstName} ${lastName}`}</h2>
                <p>{`Age: ${age}`}</p>
                <p>{`Address: ${address}`}</p>
            </div>
        );
    }

        return <p>Click on user</p>
    };

export default User;
