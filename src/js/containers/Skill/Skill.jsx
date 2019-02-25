
import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Skill extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }


    render() {
        return (

            <div>skills</div>
        );
    }
}


Skill.defaultProps = {
    name: "کاربر",
};

Skill.propTypes = {
    dispatch: PropTypes.func,
};

Skill.defaultProps = {};

const mapStateToProps = state => ({});


export default withRouter(connect(mapStateToProps)(Skill));
