import React from 'react';

const ErrorComponent = ({message}) => ( 
    <div className="alert alert-dismissible alert-warning">{message}</div>
);
 
export default ErrorComponent;
