// import 'whatwg-fetch';
// import env from 'env'


// import api from './api'
// import env from '../../env'





// /**
//  * Parses the JSON returned by a network request
//  *
//  * @param  {object} response A response from a network request
//  *
//  * @return {object}          The parsed JSON from the request
//  */
// function parseJSON(response) {
//     if (response.status === 204 || response.status === 205) {
//         return null
//     }
//     return response.json()
// }


// /**
//  * Checks if a network request came back fine, and throws an error if not
//  *
//  * @param  {object} response   A response from a network request
//  *
//  * @return {object|undefined} Returns either the response, or throws an error
//  */
// function checkStatus(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return response
//     }

//     const error = new Error(response.statusText)
//     error.response = response
//     throw error
// }


// /**
//  * Requests a URL, returning a promise
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           The response data
//  * 
//  * 
//  */


// export default function request(path, options) {
//     const baseUrl = `${env.url}${path}`

//     return fetch(`${baseUrl}${path}`, options)
//         .then(res => checkStatus(res))
//         .then(data => {
//         console.log('Request succeeded with JSON response', data)
//     })
//         .then(parseJSON)
// }

export const defaultHeaders = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Auth: env.apiKey
})

// https://content.guardianapis.com/sections?q=uk-news&api-key=test

//  let myRequest = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//         console.log('Request failed', error)
//     })

// export default myRequest


export default function request() {

    var apiRequest1 = fetch('https://content.guardianapis.com/sections?q=travel&api-key=test').then(function (response) {
        return response.json()
    });
    var apiRequest2 = fetch('https://content.guardianapis.com/sections?q=football&api-key=test').then(function (response) {
        return response.json()
    });
    var combinedData = { "apiRequest1": {}, "apiRequest2":{}}

    Promise.all([apiRequest1, apiRequest2]).then(function (values) {
                    combinedData["apiRequest1"] = values[0];
                    combinedData["apiRequest2"] = values[1];

                    console.log("combinedData", combinedData)
                    return combinedData
                });

   
}


// store urls to fetch in an array



    //     Promise.all([
    //         fetch('https://content.guardianapis.com/sections?q=travel&api-key=test').then(response => response.json()),
    //         fetch('https://content.guardianapis.com/sections?q=football&api-key=test').then(response => response.json())
    //     ])

    //     .then(data => this.setState({ tabData: data }))
    //     // .then(data => {
    //     //         const response1 = data[0]
    //     //         const response2 = data[1]

    //     // })   

    //         .catch((err) => {
    //             console.log(err);
    //         });




// const urls = [
//     'https://content.guardianapis.com/sections?q=travel&api-key=test',
//     'https://content.guardianapis.com/sections?q=football&api-key=test'
// ];

// // use map() to perform a fetch and handle the response for each url
// Promise.all(urls.map(url =>
//     fetch(url)
//         .then(parseJSON)
// ))
//     .then(data => this.setState({ tabData: data }))



// const sections = Object.keys(api.map(key => api[key]))
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// let baseUrl = `https://content.guardianapis.com/${sections}?api-key=${API_KEY}`
// return fetch(baseUrl)
//     // .then(response => {console.log(response)})
//     .then(response => response.json())
//     // .then(data => {
//     //   console.log('Request succeeded with JSON response', data.response.results)
//     // })
//     .then(data => this.setState({ tabData: data.response.results }))
//     .catch(error => {
//         console.log('Request failed', error)
//     })