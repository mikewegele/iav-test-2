/**
 * Copyright © 2025 IAV GmbH Ingenieurgesellschaft Auto und Verkehr, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
import React from 'react';
import {Link} from 'react-router-dom';
import makeStyles from "../../../../src/components/content/style_options/makeStyles.tsx";
import SubSubTitle from "../page/text/subSubTitle.tsx";

const useStyles = makeStyles(() => ({
    drawer: {
        position: "fixed",
        top: "50px",
        left: "0",
        width: "200px",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRight: "1px solid lightgray",
        zIndex: 1000,
        padding: "20px",
        fontSize: "0.875rem",
        "& ul": {
            listStyle: "none",
            padding: 0,
            margin: 0
        },
        "& li": {
            marginBottom: "8px",
            padding: "3px 0px",
            borderRadius: "4px",
            transition: "background-color 0.3s ease",
            "&::marker": {
                content: "none"
            },
            "&:hover": {
                color: "white",
                backgroundColor: "#333"
            }

        },
        "& a": {
            cursor: "pointer",
            display: "block",
            textDecoration: "none",
            color: "var(--primary-color)",
            padding: "8px",
            borderRadius: "4px",

        }
    },
    activeLink: {
        backgroundColor: "lightgray",
    },
}));

const PageNavigation: React.FC = () => {

    const {classes} = useStyles();

    return (
        <div className={classes.drawer}>
            <ul>
                <li><Link to="/overview">Quick Overview</Link></li>
                <li><Link to="/information">01 - Important Information</Link></li>
                <li><Link to="/installation-guide">02 - Installation</Link></li>
                <li><Link to="/interface">03 - Interface</Link></li>
                <li><Link to="/globaldatalayer">04 - GlobalDataLayer</Link></li>
                <li><Link to="/uilayer">05 - UILayer</Link></li>
                <li><Link to="/content-area">07 - Content Area</Link></li>
                <li><Link to="/color-settings-and-dark-mode">08 - Color Settings and Dark Mode</Link></li>
                <li><Link to="/example-project">09 - Example Project</Link></li>
                <li><Link to="/playground">10 - Playground</Link></li>
            </ul>
            <SubSubTitle>Need help?</SubSubTitle>
            <ul>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </div>
    );
};

export default PageNavigation;