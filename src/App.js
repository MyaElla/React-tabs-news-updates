import React, { Component }  from 'react';
import './App.css';
import DataTabs from "./tabs.js";



  class App extends Component {
    state = {
      tabData: [
        { label: "Taco", content: "Perhaps the greatest dish ever invented." },
        {
          label: "Burrito",
          content:
            "Perhaps the greatest dish ever invented but bigger and with rice."
        }
      ]
    } 

    render() {
      return (
        <div className="App">
          <DataTabs data={this.state.tabData} />
        </div>
      );
    }
 
}

export default App;
