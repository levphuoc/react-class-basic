import React from "react";
import './Nav.scss';
import {
    Link,
    NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {

        return (
            <div className="topnav">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'selected' : '')}>Home</NavLink>
                <NavLink to="/todo" className={({ isActive }) => (isActive ? 'selected' : '')}>ToDos</NavLink>
                <NavLink to="/mycomponent" className={({ isActive }) => (isActive ? 'selected' : '')}>MyComponent</NavLink>
                <NavLink to="/user" className={({ isActive }) => (isActive ? 'selected' : '')}>ListUser</NavLink>

            </div>
        )
    }
}
export default Nav;