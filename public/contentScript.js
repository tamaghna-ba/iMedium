/**
 * Get medium username by searching from the url or via dom element
 * @returns {string}
 */
function getAuthorName() {
    let resourceUrl = location.href?.split("/");
    // e.g. https://medium.com/@bsalwiczek
    if(resourceUrl?.at(3) && resourceUrl?.at(3).includes('@')) {
        return resourceUrl?.at(3);
    }
    // e.g. https://medium.com/the-partnered-pen/i-asked-chatgpt-how-to-earn-1000-online-it-was-hilarious-33189ab03f60
    // e.g. https://thebelladonnacomedy.com/dr-seusss-oh-the-places-you-ll-go-with-a-newborn-75c05ea685c2
    else if (document.querySelector("link[rel='author']")?.getAttribute("href").split("/").length) {
        resourceUrl = document.querySelector("link[rel='author']")?.getAttribute("href").split("/");
        if(resourceUrl?.at(2).split(".")?.at(0) && resourceUrl?.at(2).split(".")?.at(0) !== 'medium') {
            return '@' + resourceUrl?.at(2).split(".")?.at(0);
        }
        else {
            return resourceUrl?.at(3);
        }
    }
    // e.g. https://lindacaroll.medium.com/
    else if (resourceUrl?.at(2).split(".")?.at(0) && resourceUrl?.at(2).split(".")?.at(0) !== 'medium') {
        return '@' + resourceUrl?.at(2).split(".")?.at(0);
    }
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
