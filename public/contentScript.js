/**
 * Get medium username by searching from the url
 * @returns {string}
 */
function getAuthorName() {
    return location.href?.split("/")[3];
    // return document.querySelector("link[id=feedLink]")?.getAttribute("href")?.split("/")?.at(-1);
}

/**
 * Call medium graphql query to fetch user data
 * @param username
 * @param url
 * @param startFromPost
 * @param maxPaginationLimit
 * @returns {Promise<any | never>}
 */
function getAuthorData(username, url, startFromPost, maxPaginationLimit) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
            operationName: "UserProfileQuery",
            variables: {
                homepagePostsFrom: startFromPost,
                homepagePostsLimit: maxPaginationLimit,
                includeDistributedResponses: true,
                username: username
            },
            query: getGraphqlQuery()
        }])
    }).then(content => content.json());
}

/**
 * Listen from message pool of particular request
 * @request: The incoming payload
 * @sender: whos is sending it, most supposed to be a tab or an URL
 * @sendResponse: a callback function as action
 **/
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const authorName = getAuthorName();
    getAuthorData(authorName, request.url, request.startFromPost, request.maxPaginationLimit)
        .then(response => sendResponse(response))
    return true;
});
