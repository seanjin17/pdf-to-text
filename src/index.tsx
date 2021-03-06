import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Pdf2Text } from './Layouts/Pdf2Text/';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "./Components/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
          <Pdf2Text />
      </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
