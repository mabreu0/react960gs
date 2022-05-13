import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const SecureChild = ({ children }) => {
    const [ auth, setAuth ] = useState(true);

    if(!auth) {
        return <Navigate to="/" />
    }

    return children;
}

export default SecureChild;