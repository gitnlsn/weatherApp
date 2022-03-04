import axios, { AxiosRequestConfig } from "axios";

interface fetchWikipediaImage {
    q: string
}

export const fetchWikipediaImage = ({
    q
}: fetchWikipediaImage) => {
    const options: AxiosRequestConfig<any> = {
        method: 'GET',
        url: 'https://en.wikipedia.org/w/api.php',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    const params = {
        action: 'query',
        format: 'json',
        prop: 'pageimages|pageterms',
        generator: 'prefixsearch',
        redirects: 1,
        formatversion: 2,
        piprop: 'thumbnail',
        pithumbsize: 600,
        pilimit: 20,
        gpslimit: 1
    }

    return axios.request({
        ...options,
        params: { ...params, gpssearch: q }
    }).then(request => request.data.query.pages[0].thumbnail.source)
}

