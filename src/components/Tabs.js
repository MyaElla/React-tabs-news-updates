import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"

const DataTabs = ({data}) => {
    // console.log("data>>", data)

            return (
                <Tabs>
                    <TabList>
                        {data.map((tab, index) => (
                            <Tab key={index}>{tab.sectionName}</Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {data.map((tab, index) => (
                            <TabPanel key={index}>{index}{tab.webTitle}</TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            );
}


export default DataTabs;

