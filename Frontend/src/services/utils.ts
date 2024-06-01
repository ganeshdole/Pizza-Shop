const SERVER_URL = "http://localhost:3000/"


export function createUrl (path: string ) : string  {
    return `${SERVER_URL}${path}`
}

export function createError(error ) {
    return {
        'Status' : 'Error',
        "Error" : error
    }
}



