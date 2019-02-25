import React from "react";
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import CustomNavbar from '../../components/CustomNavbar';
import Profile from "../Profile/Profile";
import Skill from "../Skill/Skill";
import NotFound from "../NotFound/NotFound";

/*


*/
class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }


    render() {
        return (
            <div className="p-3 p-md-5 d-flex flex-column" style={{ minHeight: "100vh" }}>
                <div className="card border-0 shadow flex-fill" style={{ minWidth: "calc(360px - 2rem)" }}>
                    <div className="card-body p-3 d-flex flex-column">
                        <div className="d-flex flex-column flex-fill">
                            <CustomNavbar />
                            <div className="d-flex flex-fill">
                                <Switch>
                                    <Route path="/" exact component={Profile} />
                                    <Route path="/skills" component={Skill} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


App.defaultProps = {
    name: "کاربر",
};

App.propTypes = {
    dispatch: PropTypes.func,
};

App.defaultProps = {};

const mapStateToProps = state => ({});


export default withRouter(connect(mapStateToProps)(App));
