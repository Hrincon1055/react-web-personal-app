/* eslint-disable import/no-anonymous-default-export */
import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";
export default () => useContext(AuthContext);
