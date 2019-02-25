
import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import SocialFollow from '../../components/SocialFollow';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
    }


    render() {
        return (
            <div className="d-flex align-items-center justify-content-center flex-fill">
                <div className="d-flex flex-column flex-sm-row justify-content-center">

                    <div className="d-flex flex-column">
                        <div className="my-image rounded shadow-lg ml-sm-0 mr-sm-4"></div>
                    </div>


                    <div className="d-flex flex-column">
                        <h1 className="text-center text-sm-left">I'M <span className="font-weight-bolder text-purple">MUHAMMAD</span></h1>
                        <span className="text-center text-sm-left font-weight-bold mb-2">JAVA DEVELOPER <span className="text-purple" >AND</span> FRONT-END DEVELOPER</span>

                        <div className="about-me-wrapper text-secondary text-center text-sm-left mb-3">
                            Hello, I’m Muhammad Shahabipour, I was born in Tehran and live in it. I'm currently in senior positioning Java developer at VASL
                                        </div>

                        <div className="d-flex align-items-center justify-content-center justify-content-sm-start pb-4">
                            <div className="pr-3">
                                <button className="btn btn-primary shadow">HIRE ME</button>
                            </div>
                            <div className="pl-3">
                                <button className="btn btn-secondary shadow">DOWNLOAD CV</button>
                            </div>
                        </div>

                        <SocialFollow />


                    </div>
                </div>
            </div>
        );
    }
}


Profile.defaultProps = {
    name: "کاربر",
};

Profile.propTypes = {
    dispatch: PropTypes.func,
};

Profile.defaultProps = {};

const mapStateToProps = state => ({});


export default withRouter(connect(mapStateToProps)(Profile));
