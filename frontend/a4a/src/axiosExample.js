import axios from "axios"

export const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {console.log(res.data)})
    .catch(err => {console.log(err)})
  }