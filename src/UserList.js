import React, {Component} from 'react';
import User from './User';
import UserAddress from './UserAddress';



//import B from './B';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.showUser = this.showUser.bind(this);
        this.state = {
            showUserInfo: '',
            idAddress: '',
        }
    };

    showUser = (e) => {
        const { userList } = this.props;

        const id = e.target.id;

        this.setState({
            showUserInfo: userList[id-100]
        })
    };

    showAddress = (e) => {

        const { userList } = this.props;
        const id = e.target.id - 1000;

        this.setState({
            idAddress: id
        });


    };

    render() {
        const {userList} = this.props;
        const {showUserInfo, idAddress} = this.state;

        return (
            <div className="userList">
                {userList.map((user, i) => {
                    const showUserAddress = idAddress === i ? user.address : '';
                    return <div
                    id={'id' + i}
                    key = {i}
                    className = {user.online ? ' online user' : 'offline user'}>
                    <p
                        className = 'userName'
                        id={i+100}
                        onClick={this.showUser}>
                        {user.firstName} {user.lastName}
                    </p>
                    <input
                        className = 'buttonAddress'
                        id={i+1000}
                        type = 'button'
                        value = 'User address'
                        onClick={this.showAddress}
                    />
                    {idAddress !== '' && <UserAddress userAddress = {showUserAddress}/>}
                    </div>;
                    })
                }
                <User userInfo = {showUserInfo}/>

            </div>
        );
    }

}

export default UserList;
