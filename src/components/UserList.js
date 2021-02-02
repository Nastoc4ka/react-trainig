import React, {Component} from 'react';
import User from './User';
import UserListItem from './UserListItem';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idUserToShow: '',
            idAddressToShow: '',
        }
    };

    showUser = (id) => {
        this.setState({
            idUserToShow: id,
            idAddressToShow: ''

        })
    };
    showAddress = (id) => {
        this.setState({
            idAddressToShow: id,
            idUserToShow: ''

        });
    };

    render() {
        const {userList} = this.props;
        const {idUserToShow, idAddressToShow} = this.state;
        const userToDisplay = userList.filter((user) => user.id === idUserToShow)[0];

        return <div className="userList">
                {
                    userList.map((user) => {
                        const id = user.id;
                        const showUserAddress = idAddressToShow === id;
                        const onShowUserInfo = () => this.showUser(id);
                        const onShowUserAddress = () => this.showAddress(id);
                        return <UserListItem
                            key = {id}
                            user = {user}
                            showUserAddress = {showUserAddress}
                            onShowUserInfo = {onShowUserInfo}
                            onShowUserAddress = {onShowUserAddress}/>
                    })
                }
                {(userToDisplay && <User userInfo={userToDisplay}/>) || <p>Click on user</p>}

            </div>
    }
}

export default UserList;
