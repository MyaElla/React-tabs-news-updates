import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Tabs, TabList, Tab } from "@reach/tabs"
// import Child from './components/Child'
// import DataTabs from './components/Tabs'
// import {request} from './utils/request'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabData: []
        }
    }

    componentDidMount() {
    
        let apiRequest1 = fetch('https://content.guardianapis.com/sections?q=travel&api-key=test').then(function (response) {
            return response.json()
        });
        let apiRequest2 = fetch('https://content.guardianapis.com/sections?q=football&api-key=test').then(function (response) {
            return response.json()
        });
        let combinedData = []

        Promise.all([apiRequest1, apiRequest2])
                .then(function (values) {
                    combinedData[0] = values[0].response;
                    combinedData[1] = values[1].response;

                    console.log("combinedData1", combinedData[0])
                    console.log("combinedData", combinedData)
                    return combinedData
                })
                .then(combinedData => this.setState({tabData : combinedData}))
  
    }

    render() {
        const { tabData } = this.state
        console.log("tabdataRes", tabData)
        
        if (!tabData.apiRequest1) {
            return <p>No data yet </p>
        }

        return (
            <div className="App">
                <p>{tabData.response}</p>
                {/* <Tabs>
                    <TabList>
                        <Tab>Travel</Tab>
                        <Tab>UK news</Tab>
                        <Tab>Football</Tab>
                    </TabList>
                    <Child />
                </Tabs> */}

                {/* <DataTabs data={this.state.tabData} /> */}
            </div>
        );
    }

}

export default App;
