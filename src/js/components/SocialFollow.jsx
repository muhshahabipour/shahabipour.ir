import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


export default class SocialFollow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        library.add(fab, faSquare)

        return (
            <div className="d-flex justify-content-center justify-content-sm-start ">
                <a href="javascript:void(0)" className="mr-3">
                    <i className="fab fa-skype fa-2x" style={{ color: "#00aff0" }}></i>
                </a>
                <a href="https://www.linkedin.com/in/muhshahabipour/" className="mr-3">
                    <i className="fab fa-linkedin fa-2x" style={{ color: "#0077b5" }}></i>
                </a>

                <a href="https://github.com/muhshahabipour" className="mr-3">
                    <i className="fab fa-github-square fa-2x" style={{ color: "#333" }}></i>
                </a>
                <a href="https://github.com/muhshahabipour" className="mr-3">
                    <span className="fa-layers fa-2x">
                        <FontAwesomeIcon icon="square" color="#333" />
                        <FontAwesomeIcon icon={['fab', 'codepen']} inverse transform="shrink-6" />
                    </span>
                </a>
                <a href="https://twitter.com/muhshahabipour" className="mr-3">
                    <i className="fab fa-twitter-square fa-2x" style={{ color: "#1da1f2" }}></i>
                </a>
                <a href="https://www.instagram.com/muhshahabipour/">
                    <i className="fab fa-instagram fa-2x instagram-font-color"></i>
                </a>
            </div>
        )
    }

}