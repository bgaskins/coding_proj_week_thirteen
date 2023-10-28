import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

/* Project requirements: 
- Using create-react-app, create a new React project. 
- Create a LoginForm component that contains the following:
- Username and password input fields, an h3 that says Log In, with a border. 
- Style the component using the default generated CSS file.
- Create a Navigation component that contains links styled like a navbar.
- The links don't have to go anywhere.
- Put the Navigation component at the top of the page and the LoginForm in the center of the page.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <LoginForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
