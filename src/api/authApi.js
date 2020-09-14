import axios from 'axios'
import { SERVER_API } from '../constants/urls'

export const signin = user => {
  return axios.post(`${SERVER_API}/users/signin`, { user })
    .then(res => res.data)
    .catch(err => err)
}

export const signup = user => {
  return axios.post(`${SERVER_API}/users/signup`, { user })
    .then(res => res.data)
    .catch(err => err)
}