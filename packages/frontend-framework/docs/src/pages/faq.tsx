import React from "react";
import Page from "../components/page/page.tsx";
import Title from "../components/page/text/title.tsx";
import SubTitle from "../components/page/text/subTitle.tsx";
import PageLink from "../components/page/text/pageLink.tsx";
import Text from "../components/page/text/text.tsx";

const FAQ: React.FC = () => {

    return (
        <Page>
            <Title>FAQ</Title>
            <Text>
                This page lists common questions and problems and links corresponding
                issues.
            </Text>
            <SubTitle>
                Problems using the SVG format as React Component with Vite
            </SubTitle>
            <Text>
                In a few scenarios, the framework requires the use of SVG Files (e.g.,
                Icons). To be able to set the color of the SVG inside the Framework, the
                Icons must be imported as React Components.
            </Text>
            <Text>
                Use the following steps to solve issues regarding the SVG import as React
                Components:
            </Text>
            <Text>
                Install the vite-plugin-svgr with the command "npm i vite-plugin-svgr" and
                configure it as shown <PageLink label={"here"} to={"https://www.npmjs.com/package/vite-plugin-svgr"}/>.
                If this
                doesn’t help, further possible solutions can be found <PageLink
                to={"https://stackoverflow.com/questions/74720726/type-definition-for-vite-plugin-svgr"}
                label={"here"}/>.
            </Text>
            <SubTitle>Can the IAV Frontend Framework be used with Angular?</SubTitle>
            <Text>
                No, the IAV Frontend Framework only supports React Components and is
                therefore only suitable for React-based projects.
            </Text>
        </Page>
    )
};

export default FAQ;