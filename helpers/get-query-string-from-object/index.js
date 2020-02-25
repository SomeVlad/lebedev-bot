import { isPlainObject } from 'lodash/fp'

export const getQueryStringFromObject = queryObject => {
    if (!isPlainObject(queryObject)) {
        return null
    }

    return Object.entries(queryObject)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&')
}
