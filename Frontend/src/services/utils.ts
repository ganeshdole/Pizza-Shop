import {SERVER_URL} from "@/congif"


export function createUrl (path: string ) : string  {
    return `${SERVER_URL}${path}`
}

export function createError(error) {
    return {
        'Status' : 'Error',
        "Error" : error
    }
}



