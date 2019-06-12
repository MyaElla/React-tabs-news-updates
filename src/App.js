import React, { Component } from 'react';
import DataTabs from './components/Tabs'


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
                    combinedData[0] = values[0].response.results;
                    combinedData[1] = values[1].response.results;

                    console.log("combinedData1", combinedData[0])
                    console.log("combinedData", combinedData)
                    return combinedData
                })
                .then(combinedData => this.setState({tabData : combinedData}))
  
    }

    render() {
        const { tabData } = this.state
        console.log("tabdataRes", tabData)
        
        if (!tabData.length) {
            return <p>No data yet </p>
        }

        return (
            <div className="App">
                <p>{tabData.response}</p>

                <DataTabs data={this.state.tabData} />
            </div>
        );
    }

}

export default App;
