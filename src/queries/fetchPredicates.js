import { flureeFetch } from '../utils/flureeFetch'

const query = {
    "select": [
      "*"
    ],
    "from": "_predicate"
  }

const fetchPredicates = async () => {
    const res = await flureeFetch('/query', query)
    return res
}

export { fetchPredicates };