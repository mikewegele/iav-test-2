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

import React, {PropsWithChildren} from "react";
import makeStyles from "../../../../../src/components/content/style_options/makeStyles.tsx";
import {classNames} from "primereact/utils";

const useStyles = makeStyles(() => ({
    h2: {
        fontSize: "1rem",
        fontWeight: "bold",
        margin: "20px 0 16px 0",
    },
}));

interface Props {
    className?: string;
}

const SubSubTitle: React.FC<PropsWithChildren<Props>> = (props) => {

    const {className, children} = props;

    const {classes} = useStyles();

    return (
        <h3 className={classNames(className, classes.h2)}>{children}</h3>
    );
}

export default SubSubTitle;