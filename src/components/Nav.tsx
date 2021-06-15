import * as React from "react";

import { NavLink } from "react-router-dom";

const About = () => (
    <ul>
        <li>
            <NavLink to="/">
                Landing
            </NavLink>
        </li>
        <li>
            <NavLink to="/about">
                About
            </NavLink>
        </li>
        <li>
            <NavLink to="/broken-link">
                Broken Link
            </NavLink>
        </li>
        <li>
            <NavLink to="/log-in">
                Log in
            </NavLink>
        </li>
    </ul>
);

export default About;