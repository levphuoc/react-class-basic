import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ChildComponent from './Example/ChildComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 2 components: class components / function components (function, arrow)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Hello Nhi with phuoc */}
          Hello TODO App with Phuoc &amp; Nhi
        </p>
        {/* <MyComponent/> */}

        {/*<MyComponent></MyComponent>*/}
        <ListTodo />
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
  );
}

export default App;
