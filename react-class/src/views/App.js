import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ChildComponent from './Example/ChildComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListUser from './User/ListUser';
/**
 * 2 components: class components / function components (function, arrow)
 */

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
       <Routes>
            <Route path="/"  element={<Home />} className={({ isActive }) => (isActive ? 'active' : '')} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/mycomponent" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
        </Routes>
      
      </header>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
    </Router>
  );
}

export default App;
