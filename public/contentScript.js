/**
 * Get medium username by searching from the url
 * @returns {string}
 */
function getAuthorName() {
    // e.g. https://medium.com/@bsalwiczek
    if(location.href?.split("/")[3]) {
        return location.href?.split("/")[3];
    }
    // e.g. https://lindacaroll.medium.com/
    else if (location.href?.split("/")?.at(2).split(".")[0]) {
        return location.href?.split("/")?.at(2).split(".")[0];
    }
    else {
        // e.g. https://medium.com/the-partnered-pen/i-asked-chatgpt-how-to-earn-1000-online-it-was-hilarious-33189ab03f60
       return '@'+document.querySelector("link[rel='author']")?.getAttribute("href").split("/")?.at(2).split(".")[0];
    }
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
    const authorName = request.authorName || getAuthorName();
    getAuthorData(authorName, request.url, request.startFromPost, request.maxPaginationLimit)
        .then(response => sendResponse(response))
    return true;
});
