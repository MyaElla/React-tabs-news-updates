
    constructor(props) {
        super(props);

        this.state = {
            tabData: []
        }
    }

    fetchSectionContents(sectionName, sectionCode) {
        return (
            fetch(`https://content.guardianapis.com/search?section=${sectionCode}&api-key=test`)
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
                .then(combinedData => this.setState({tabData : combinedData}))
  
    }

        const { tabData } = this.state
        console.log("tabdataRes", tabData)
        
        if (!tabData.length) {
            return <p>No data yet</p>
        }

                    <TabList>
                        <Tab>Travel</Tab>
                        <Tab>UK news</Tab>
                        <Tab>Football</Tab>
                    </TabList>
                    <Child />
                </Tabs>

                <DataTabs data={this.state.tabData} />
            </div>
        );
    }

}

export default App;
