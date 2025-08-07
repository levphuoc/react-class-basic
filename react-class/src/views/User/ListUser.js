import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ListUser.scss';
class ListUser extends React.Component {
state = {
    listUser : []
}
     async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1', {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        });
        console.log('User data fetched:', res.data.data);
        
    }
    handleViewDetailUser = (user) =>{
        // Or if using useNavigate hook:
        this.props.navigate(`/user/${user.id}`);
    }
    render() {  
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">List of Users</div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <div className="child" key={item.id}
                                onClick={() => this.handleViewDetailUser(item)}>
                                {index + 1} - {item.first_name} {item.last_name} 
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const ListUserWrapper = () => {
    const navigate = useNavigate();
    return <ListUser navigate={navigate} />;
};


export default ListUserWrapper;