import { Navbar, NavItem, NavLink } from "react-bootstrap";
import pdf from '../resouces.js/resume.pdf'
import React from 'react';


function Nav(){
    return(
        <>
            <Navbar className=""  sticky="top" expand="sm">
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-center">
                    <NavItem>
                        <NavLink href="https://github.com/PSanchezD" target="_blank">GITHUB</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  href="https://www.linkedin.com/in/pedro-s-3948b6126/">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  href="/">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  href="#projects">PROJECT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#form-c">CONTACT ME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={pdf} target="_blank">RESUME</NavLink>
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Nav