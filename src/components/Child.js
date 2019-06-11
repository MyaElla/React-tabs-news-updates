import React, { Component } from 'react'
import { TabPanels, TabPanel } from "@reach/tabs"
// import request from '../utils/request'
// import api from '../utils/api'


class Child extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            tabData: []
        }
    }

    componentDidMount() {
        // const query = Object.keys(api.map(key => api[key]))
        const API_KEY = `${process.env.REACT_APP_Content_API_KEY}`;
        console.log("API--", API_KEY )
        let baseUrl = 'https://content.guardianapis.com/sections?q=travel&api-key=test'
        // let baseUrl = `https://content.guardianapis.com/sections?q=${query}&api-key=${API_KEY}`
        return fetch(baseUrl)
            .then(response => response.json())
            .then(data => this.setState({ tabData: data.response.results }))
            .catch(error => {
                console.log('Request failed', error)
            })
    }

    render() {
        const { tabData } = this.state
        console.log("tabData=>", tabData)
        const tabList = tabData.map(tab => {
                return (
                    <TabPanel key={tab.id}>{tab.webTitle}</TabPanel>
                )
            })
           
        return (
 
                <TabPanels>{tabList}</TabPanels>
        
        );
    }

}

export default Child