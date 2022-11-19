const axios = require('axios')

const REQUEST_KEY = "&key=ycxPkCFuLfXARRPLUKtt&secret=SIroYcDpGSwKtmTfsKnOfhPPLzPtlson"
const DISCOGS_DATABSE_API = "https://api.discogs.com/database/search"
const VALID_QUERY_PARAMS = ["type","title","release_title","credit","artist","anv","label","genre","style","country","year","format",
                            "catno","barcode","track","submitter","contributor", "per_page", "page"]
const PARAMS_HASHSET = new Set(VALID_QUERY_PARAMS)

const searchForArtist = async (name) => {
    return await axios.get(
        "?q=nirvana&year=1991&artist=nirvana" + REQUEST_KEY).then(res => {
        const uniqueTitleFilter = new Set();
        console.log(res.data)
        return res.data.results.filter(instance => {
            if (!uniqueTitleFilter.has(instance.title)) {
                uniqueTitleFilter.add(instance.title)
                return instance
            }
        });
    })
}


/*
Generalized function to query the discogs API for data.

Query should be a string indicating what specifically you're looking for, i.e.
an album name or artist name.

Params should be a JSON object with any number of keys from the list:
[type,title,release_title,credit,artist,anv,label,genre,style,country,year,format,
catno,barcode,track,submitter,contributor, per_page, page]. This argument is optional.

A well-formed query example would be:
searchDB("nirvana", {artist: "nirvana", year: "1991"}).then(...dosomethingwithresults)


More information on the parameters can be found at:
https://www.discogs.com/developers/#page:database,header:database-search
 */
const searchDB = async (query, params) => {
    if (query === undefined || query === null || query === "") {
        console.log("Invalid query syntax. Cannot be \"\", null or undefined.")
        console.log("searchDB will return undefined on failed call.")
        return undefined;
    }
    let qString = DISCOGS_DATABSE_API + "?q=" + query;
    for (let key in params) {
        if (!PARAMS_HASHSET.has(key)){
            console.log("searchDB call failed due to invalid parameter:"+key)
            console.log("searchDB will return undefined on failed call.")
            return undefined;
        }
        qString += "&" + key + "=" + params[key]
    }
    return await axios.get(qString + REQUEST_KEY).then( res=>
                                                        {
                                                            const uniqueTitleFilter = new Set();
                                                            return res.data.results.filter(instance => {
                                                                if (!uniqueTitleFilter.has(instance.title)) {
                                                                    uniqueTitleFilter.add(instance.title)
                                                                    return instance
                                                                }
                                                            });
                                                        });
}

export default searchDB
