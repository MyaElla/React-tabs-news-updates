import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"

const DataTabs = ({data}) => {


            return (
                <Tabs>
                    <TabList>
                        {data.map((tab, index) => (
                            <Tab key={index}>{tab.label}</Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {data.map((tab, index) => (
                            <TabPanel key={index}>{tab.content}</TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            );
}


export default DataTabs;

