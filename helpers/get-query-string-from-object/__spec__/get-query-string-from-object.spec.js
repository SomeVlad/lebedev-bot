import { getQueryStringFromObject } from '..'

describe('getQueryStringFromObject', () => {
    it('should return query string from object', () => {
        expect(getQueryStringFromObject({ a: '1', b: 2 })).toBe('a=1&b=2')
    })

    it('should escape query string', () => {
        expect(getQueryStringFromObject({ a: '&1', b: 2 })).toBe('a=%261&b=2')
    })

    it('should return null by default', () => {
        expect(getQueryStringFromObject([])).toBe(null)
        expect(getQueryStringFromObject()).toBe(null)
        expect(getQueryStringFromObject(null)).toBe(null)
        expect(getQueryStringFromObject('oops')).toBe(null)
    })
})
