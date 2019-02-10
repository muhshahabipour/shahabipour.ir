import React from 'react';



export default class SocialFollow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="d-flex justify-content-center justify-content-sm-start ">
                <a href="" className=" text-dark-50">
                    <i className="fab fa-linkedin fa-2x mr-3" style={{color: "#0077b5"}}></i>
                </a>
                <a href="" className=" text-dark-50">
                    <i className="fab fa-skype fa-2x mr-3" style={{color: "#00aff0"}}></i>
                </a>
                <a href="" className=" text-dark-50">
                    <i className="fab fa-github-square fa-2x mr-3" style={{color: "#333"}}></i>
                </a>
                <a href="" className=" text-dark-50">
                    <i className="fab fa-codepen fa-2x mr-3" style={{color: "#0ebeff"}}></i>
                </a>
                <a href="" className=" text-dark-50">
                    <i className="fab fa-twitter-square fa-2x mr-3" style={{color: "#1da1f2"}}></i>
                </a>
                <a href="" className=" text-dark-50">
                    <i className="fab fa-instagram fa-2x mr-3 instagram-font-color"></i>
                </a>
            </div>
        )
    }

}