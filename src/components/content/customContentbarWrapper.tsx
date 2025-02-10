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
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {ReactElement} from "react";
import {generateHashOfLength} from "../../utils/hash";
import {ContentbarWrapperInterface} from "./contentbarWrapperInterface";
import "./contentbar.css";

export class CustomContentbarWrapper implements ContentbarWrapperInterface {
    constructor(
        private id: string,
        private renderElement: ReactElement,
        private contentAreaElement: React.ReactElement,
    ) {
    }

    getKey() {
        return generateHashOfLength(6);
    }

    getId() {
        return this.id;
    }

    getContentAreaElement(): React.ReactElement {
        return this.contentAreaElement;
    }

    getContentbarElement() {
        return <div id="restrictDimensions">{this.renderElement}</div>;
    }
}
