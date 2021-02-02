import React from 'react';

const UserAddress = (props) => {

    const { userAddress } = props;


    return userAddress && <p className='userAddress'>{`Address: ${userAddress}`}</p>

};

export default UserAddress;
