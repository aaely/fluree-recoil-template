import { atom, selector, } from 'recoil'
import { fetchCollections } from '../queries/fetchCollections'
import { fetchPredicates } from '../queries/fetchPredicates'

export const collections = atom({
    key: 'collections',
    default: []
})

export const predicates = atom({
    key: 'predicates',
    default: []
})

export const getCollections = selector({
    key: 'getCollections',
    get: async () => {
        const response = await fetchCollections()
        return response
    }
})

export const getPredicates = selector({
    key: 'getPredicates',
    get: async () => {
        const response = await fetchPredicates()
        return response
    }
})