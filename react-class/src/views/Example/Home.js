import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ColorWrapper from "../HOC/ColorWrapper";
//  Class component chính
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigate('/todo');
        }, 3000);
    }

    render() {
        const { color } = this.props;
        return (
            <div className="home-container" style={{ color : color }}>
                <h1>Welcome to the Home Page</h1>
            </div>
        );
    }
}

// Wrapper để inject hooks vào class component
const HomeWrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return (
        <Home
            {...props}
            navigate={navigate}
            location={location}
            params={params}
        />
    );
};

export default ColorWrapper(HomeWrapper);
