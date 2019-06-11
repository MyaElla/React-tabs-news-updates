import React, { Component }  from 'react';
import './App.css';
// import DataTabs from "./Tabs.js";
// import myRequest from "./data/api";


let url = 'https://content.guardianapis.com/search?order-by=newest&api-key=test'


  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        // tabTitle: {sectionName},
        // body: {webTitle}
        tabData: [ ]
      }
    }

    componentDidMount() {
      // this.myRequest()

      fetch(url)
        // .then(response => {console.log(response)})
        .then(response => response.json())
        // .then(data => {
        //   console.log('Request succeeded with JSON response', data.response.results)
        // })
        .then(data => this.setState({ tabData: data.response.results }))
        .catch(error => {
          console.log('Request failed', error)
        })
    }

    render() {
      const {tabData} = this.state
      console.log("tabData=>", tabData)
      const tabList = tabData.length ? (
        tabData.map(tab => {
          return (
            <div key={tab.id} >
              <span>{tab.sectionName}</span>
            </div>
          )
        })
      ) 
      : (<div>0</div>
        )
      return (
        <div className="App">
          {tabList}
          {/* <DataTabs data={this.state.tabData} /> */}
        </div>
      );
    }
 
}

export default App;
