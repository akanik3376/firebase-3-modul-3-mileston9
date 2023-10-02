/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../ContexProbidor/authProbidor";
import { Navigate } from "react-router-dom";

const PrivetRoot = ({ children }) => {
    const { loading, user } = useContext(authContext)

    if (loading) {
        return <h1>loading</h1>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivetRoot;