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

import React from "react";
import makeStyles from "../../../../../src/components/content/style_options/makeStyles.tsx";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "600px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        "& h2": {
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "20px",
            color: "#0056b3",
        },
        "& p": {
            lineHeight: 1.6,
            margin: "10px 0",
        },
        "& a": {
            color: "#0056b3",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline",
            },
        }
    },
}));


const Imprint = () => {

    const {classes} = useStyles();

    return (
        <div className={classes.wrapper}>
            <h2>Imprint</h2>
            <p><strong>IAV GmbH Ingenieurgesellschaft Auto und Verkehr</strong></p>
            <p>Carnotstraße 1<br/>10587 Berlin<br/>Germany</p>

            <p>Tel.: +49 30 3997-80<br/>Fax: +49 30 3997-89926<br/>Email: <a
                href="mailto:impressum@iav.com">impressum@iav.com</a>
            </p>

            <p>Website: <a href="http://www.iav.com">www.iav.com</a></p>

            <p><strong>Headquarter:</strong> Berlin<br/>
                <strong>Register court:</strong> Amtsgericht Charlottenburg<br/>
                <strong>Registration number:</strong> HRB 21 280 B<br/>
                <strong>USt-Ident-Number:</strong> DE 136647090</p>

            <p><strong>Managing directors:</strong><br/>
                Jörg Astalosch (Chairman)<br/>Martin Mahlke<br/>Jens Pfitzinger</p>

            <p><strong>Chairman of the supervisory board:</strong><br/>Dr. Nikolai Ardey</p>
        </div>
    )
};

export default Imprint;
