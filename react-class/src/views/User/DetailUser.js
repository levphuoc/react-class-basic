import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        userDetails: {}
    };

    async componentDidMount() {
        const { id } = this.props;

        try {
            const res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                userDetails: res && res.data && res.data.data ? res.data.data : {}
            });
            console.log('User details fetched:', res.data);
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    }

    render() {
        const { userDetails } = this.state;
        const { navigate } = this.props;
        const isEmptyObj = Object.keys(userDetails).length === 0;

        return (
            <div className="detail-user-container">
                <div className="title">Detail User</div>
                {!isEmptyObj && (
                    <div className="detail-user-content">
                        <p>User ID: {userDetails.id}</p>
                        <p>First Name: {userDetails.first_name}</p>
                        <p>Last Name: {userDetails.last_name}</p>
                        <p>Email: {userDetails.email}</p>
                        <img src={userDetails.avatar} alt="User Avatar" />
                        <br />
                        <button onClick={() => navigate("/user")}>Back To List</button>
                    </div>
                )}
            </div>
        );
    }
}

// Function wrapper to inject hooks
const DetailUserWrapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailUser id={id} navigate={navigate} />;
};

export default DetailUserWrapper;
