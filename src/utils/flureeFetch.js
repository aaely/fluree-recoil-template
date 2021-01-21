import axios from 'axios'

async function parseJSON(response) {
  try {
      const res = await response.json()
      return res
  } catch (error) {
    console.log(error)
  }
}

const flureeFetch = async (uri, body) => {
  try {
      const fullUri = "http://localhost:8080/fdb/<ledger name>" + uri
      const response = await axios({
        url: fullUri,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(body) 
      })
      console.log(response.data)
      return response.data
  } catch (error) {
    console.log(error)
  }
}

export { flureeFetch, parseJSON };