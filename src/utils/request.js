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