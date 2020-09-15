import axios from 'axios'
import { SERVER_API } from '../constants/urls'

import { getErrorMessage } from '../utils/error'

export const createBlock = (block) => {
  return axios.post(`${SERVER_API}/blocks/create`, { block }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => res.data)
    .catch(err => getErrorMessage("Error while creating Block...", err))
}

export const getBlock = (blockHash) => {
  return axios.get(`${SERVER_API}/blocks/${blockHash}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}

export const getLastBlock = () => {
  return axios.get(`${SERVER_API}/blocks`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}