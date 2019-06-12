
import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import Article from './Article'

const DataTabs = ({data}) => {

            return (
                <Tabs>
                    <TabList>
                        {data.map((tab, index) => (
                            <Tab key={index}>{tab.sectionName}</Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {data.map((tab, index) => (
                            
                            <TabPanel key={index}>
                                <ol>
                                {tab.articles.map((articleData, articleIndex) => (
                                    <Article articleData={articleData} key={articleIndex} />
                                ))}
                                    </ol>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            );
}

export default DataTabs;