# Copyright © 2024 IAV GmbH Ingenieurgesellschaft Auto und Verkehr, All Rights Reserved.
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# 
# SPDX-License-Identifier: Apache-2.0

#!/bin/bash

# IMPORTANT: This file only takes packages with a scope (for example @iavofficial/frontend-framework) into account.
# IMPORTANT: This script should be executed in the root folder of the repository.

SOURCE_DIR="main/generated_docs/packages"
DEST_DIR="generated_docs/packages"

# Deletes files in root generated docs which do not exist in main generated docs and
# copies (also overwrites) the other files.
rsync -av --exclude="packages" --delete main/generated_docs/* generated_docs/

# Iterate over scopes
for scope in "$SOURCE_DIR"/*; do
    if [ -d "$scope" ]; then
        scope_name=$(basename "$scope")

        # Create the scope folder in the destination if it does not exist
        mkdir -p "$DEST_DIR/$scope_name"

        # Iterate over packages within the scope
        for package in "$scope"/*; do
            if [ -d "$package" ]; then
                package_name=$(basename "$package")

                # Create the package folder in the destination if it does not exist
                mkdir -p "$DEST_DIR/$scope_name/$package_name"

                # Iterate over docs within the package
                for doc in "$package"/docs/*; do
                    if [ -d "$doc" ]; then
                        package_version=$(basename "$doc")
                        echo "Processing $package_name version $package_version..."

                        # Navigate to the docs directory and run npm build
                        cd "$doc"
                        npm run build

                        # Rename the dist folder to the version name
                        mv dist "$package_version"

                        # Copy the version folder to the destination folder
                        cp -r "$package_version" "$DEST_DIR/$scope_name/$package_name/"
                        echo "Copied $package_version to $DEST_DIR/$scope_name/$package_name/"

                        # Move back to the root directory
                        cd -
                    fi
                done
            fi
        done
    fi
done

rm -rf main

git add .
git commit -m "chore: Deploy updated documentation"
git push origin gh-pages
