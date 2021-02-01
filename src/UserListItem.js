import React from 'react';
import UserAddress from './UserAddress';

const UserListItem = (props) => {

    const {showUserAddress, onShowUserInfo, onShowUserAddress, user: {firstName, lastName, id, online, address}} = props;

    return <>
        <div
            key={id}
            className={online ? ' online user' : 'offline user'}>
            <p
                className='userName'
                onClick={onShowUserInfo}>
                {firstName} {lastName}
            </p>
            <input
                className='buttonAddress'
                type='button'
                value='User address'
                onClick={onShowUserAddress}
            />
            {showUserAddress && <UserAddress userAddress={address}/>}
        </div>
    </>
};

export default UserListItem