import React, { Component } from 'react';
import { render } from 'react-dom';
import CustomNavbar from './components/CustomNavbar.jsx';
import SocialFollow from './components/SocialFollow.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './style.scss';
import myPhoto from './images/my-photo.jpg';

// <button className="btn btn-info-gradiant shadow rounded-pill"><span></span>Download CV</button>
// <button className="btn btn-outline-info-gradiant rounded-pill"><span>Hire Me</span></button>
// <div className="flex-fill d-flex flex-column justify-content-center align-items-center"><img src={`${myPhoto}`} className="img-responsive" style={{width: "100px", height: "100px"}} alt="Image"/></div>

const App = () => {
    return (
        <div className="p-3 p-md-5 d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="card border-0 shadow flex-fill" style={{ minWidth: "calc(360px - 2rem)" }}>
                <div className="card-body p-3">
                    <div className="d-flex flex-column h-100">
                        <CustomNavbar />

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


                    </div>
                </div>
            </div>
        </div>
    )
}

render(
    <App />,
    document.getElementById('root')
);
