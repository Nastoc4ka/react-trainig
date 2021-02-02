import React from 'react';
import UserAddress from './UserAddress';

const UserListItem = (props) => {

    const {showUserAddress, onShowUserInfo, onShowUserAddress, user: {firstName, lastName, online, address}} = props;

    return <li>
            <p
                className={online ? 'online userName' : 'offline userName'}
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
        </li>
};

export default UserListItem