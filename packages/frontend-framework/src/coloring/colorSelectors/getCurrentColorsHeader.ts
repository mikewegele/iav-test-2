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

import { HeaderColorOptions } from "@iavofficial/frontend-framework-shared-types/colorOptionTypes";
import {
  DARK_HEADER_BACKGROUND_COLOR,
  DARK_HEADER_SETTINGS_ICON_COLOR,
  DARK_HEADER_USER_ICON_COLOR,
  LIGHT_HEADER_BACKGROUND_COLOR,
  LIGHT_HEADER_SETTINGS_ICON_COLOR,
  LIGHT_HEADER_USER_ICON_COLOR,
} from "../defaultColors";
import {determineSelectedColorHof} from "./determineSelectedColor";

export const getCurrentColorsHeader = (
  darkmodeIsEnabled: boolean,
  customColorsDisabledInCurrentMode: boolean,
  headerColorOptions: HeaderColorOptions,
) => {
  const determineColor = determineSelectedColorHof(
    darkmodeIsEnabled,
    customColorsDisabledInCurrentMode,
  );

  return {
    backgroundColor: determineColor(
      LIGHT_HEADER_BACKGROUND_COLOR,
      DARK_HEADER_BACKGROUND_COLOR,
      headerColorOptions.backgroundColor,
    ),
    settingsIconColor: determineColor(
      LIGHT_HEADER_SETTINGS_ICON_COLOR,
      DARK_HEADER_SETTINGS_ICON_COLOR,
      headerColorOptions.settingsIconColor,
    ),
    userIconColor: determineColor(
      LIGHT_HEADER_USER_ICON_COLOR,
      DARK_HEADER_USER_ICON_COLOR,
      headerColorOptions.userIconColor,
    ),
  };
};
