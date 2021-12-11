import React from "react";
import { Spinner } from "react-bootstrap";


const Loading = ({ loading }) => loading && <Spinner animation="border" variant="primary" />;

export default Loading;
