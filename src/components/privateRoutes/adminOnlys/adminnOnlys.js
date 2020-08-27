import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoutes = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    if (userInfo && userInfo.user.isAdmin === true) {
        return <Route {...props} /> // haciendo esto se pasa el prop `path`, `auth` y `component`
      }
    
      return <Redirect to="/" />
}

export default AdminRoutes;