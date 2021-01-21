import { flureeFetch } from '../utils/flureeFetch'

const query = {
    "select": [
      "*"
    ],
    "from": "_collection"
  }

const fetchCollections = async () => {
    const res = await flureeFetch('/query', query)
    return res
}

export { fetchCollections };