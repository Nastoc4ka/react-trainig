import React, {Component} from 'react';
import User from './User';
import UserAddress from './UserAddress';


//import B from './B';

class UserList extends Component {
    showUser = (id) => {
        this.setState({
            idUserToShow: id
        })
    };
    showAddress = (id) => {
        this.setState({
            idAddressToShow: id
        });


    };

    constructor(props) {
        super(props);
        this.showUser = this.showUser.bind(this);
        this.state = {
            idUserToShow: '',
            idAddressToShow: '',
        }
    };

    render() {
        const {userList} = this.props;
        const {idUserToShow, idAddressToShow} = this.state;
        const userToDisplay = userList.filter((user) => user.id === idUserToShow)[0];

        return (
            <div className="userList">
                {
                    userList.map((user) => {
                        const id = user.id;
                        const showUserAddress = idAddressToShow === id ? user.address : '';
                        return <div
                            key={id}
                            className={user.online ? ' online user' : 'offline user'}>
                            <p
                                className='userName'
                                onClick={() => this.showUser(id)}>
                                {user.firstName} {user.lastName}
                            </p>
                            <input
                                className='buttonAddress'
                                type='button'
                                value='User address'
                                onClick={() => this.showAddress(id)}
                            />
                            {idAddressToShow !== '' && <UserAddress userAddress={showUserAddress}/>}
                        </div>;
                    })
                }
                {userToDisplay && <User userInfo={userToDisplay}/>}

            </div>
        );
    }

}

export default UserList;
