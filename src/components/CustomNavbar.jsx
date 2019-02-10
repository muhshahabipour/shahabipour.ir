import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-light bg-light shadow rounded mb-4">
                    <NavbarToggler onClick={this.toggle} className="ml-auto" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/" className="active">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="javascript:void(0)">SKILL</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="javascript:void(0)" disabled className="comming-soon" data-text="Soon">BLOG</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
