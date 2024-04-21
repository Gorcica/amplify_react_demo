import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import { Amplify } from "aws-amplify";
import reportWebVitals from './reportWebVitals';
import './index.css';

// import 'bootstrap/dist/css/bootstrap.css';

import awsconfig from "./aws-exports";

import App from './App';
// import ServiceTop from './components/pages/ServiceTop';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />,
//   </BrowserRouter>,
//   document.getElementById('root')
// );

Amplify.configure(awsconfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
