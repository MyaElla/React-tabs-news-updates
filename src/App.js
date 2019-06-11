import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@reach/tabs"
import Child from './components/Child'


class App extends Component {
    

    render() {
     
        return (
            <div className="App">
                <Tabs>
                    <TabList>
                        <Tab>Travel</Tab>
                        <Tab>UK news</Tab>
                        <Tab>Football</Tab>
                    </TabList>
                    <Child />
                </Tabs>

                {/* <DataTabs data={this.state.tabData} /> */}
            </div>
        );
    }

}

export default App;
