import React, { Component } from 'react';
import DataTabs from './components/Tabs'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabData: []
        }
    }

    fetchSectionContents(sectionName, sectionCode) {
        const API_KEY = `${process.env.REACT_APP_Content_API_KEY}`;
        return (
            fetch(`https://content.guardianapis.com/search?section=${sectionCode}&api-key=${API_KEY}`)
                .then(response => response.json())
                .then(x => x.response.results)
                .then(articles => ({
                    sectionName,
                    articles
                }))
        )
    }

    componentDidMount() {

        let apiRequest1 = this.fetchSectionContents('Travel', 'travel')
        let apiRequest2 = this.fetchSectionContents('Football', 'football')

        Promise.all([apiRequest1, apiRequest2])
            .then(combinedData => this.setState({ tabData: combinedData }))

    }

    render() {
        const { tabData } = this.state

        if (!tabData.length) {
            return <p>No data yet</p>
        }

        return (
            <div className="App">
                <DataTabs data={this.state.tabData} />
            </div>
        );
    }

}

export default App;
