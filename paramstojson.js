function objectifyQueryString(url) {
    let _url = new URL(url);
    let _params = new URLSearchParams(_url.search);
    let query = Array.from(_params.keys()).reduce((sum, value) => {
        return Object.assign({
            [value]: _params.get(value)
        }, sum);
    }, {});
    return query;
}

// this function will do the job for you !!!
//