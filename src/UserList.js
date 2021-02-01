import React, {Component} from 'react';
import User from './User';
import UserListItem from './UserListItem';

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
                        const showUserAddress = idAddressToShow === id;
                        const onShowUserInfo = () => this.showUser(id);
                        const onShowUserAddress = () => this.showAddress(id);
                        return <UserListItem
                            user={user}
                            showUserAddress = {showUserAddress}
                            onShowUserInfo = {onShowUserInfo}
                            onShowUserAddress ={onShowUserAddress}
                        />
                    })
                }
                {userToDisplay && <User userInfo={userToDisplay}/>}

            </div>
        );
    }

}

export default UserList;
