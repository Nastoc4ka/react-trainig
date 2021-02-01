import React from 'react';

const User = (props) => {

    const {userInfo: user} = props;

    if(user.firstName){
        return (
            <div className="userInfo">
                <h2>{`${user.firstName} ${user.lastName}`}</h2>
                <p>{`Age: ${user.age}`}</p>
                <p>{`Address: ${user.address}`}</p>
                <p>{`Active: ${user.online}`}</p>

            </div>
        );
    }

        return <p>Click on user</p>
    };



export default User;
