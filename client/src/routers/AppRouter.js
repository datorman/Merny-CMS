import React from 'react';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from './../components/DashboardPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from './../components/HomePage';
import BlogsPage from './../components/BlogsPage';
import BlogView from './../components/BlogView';
import BlogForm from './../components/BlogForm';

export const history = createHistory();

const AppRouter = () =>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute 
                    path="/"
                    component = {HomePage}
                    exact={true}
                />
                <PublicRoute 
                    path="/blog"
                    component = {BlogsPage}
                    exact={true}
                />
                <PublicRoute
                    path="/blog/view/:id"
                    component={BlogView}
                    exact={true}
                />
                <PublicRoute
                    path="/blog/create"
                    component={BlogForm}
                    exact={true}
                />
                <PublicRoute 
                    path = "/admin"
                    component ={LoginPage}
                    exact={true}
                    headerVis={false}
                />
                <PrivateRoute 
                    path = "/dashboard"
                    component ={DashboardPage}
                    exact={true}
                />
                <Route 
                    component = {NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;