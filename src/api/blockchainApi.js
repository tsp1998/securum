import axios from 'axios'
import { SERVER_API } from '../constants/urls'

import { getErrorMessage } from '../utils/error'

export const createBlockchain = () => {
  return axios.post(`${SERVER_API}/blockchain/create`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => res.data)
    .catch(err => getErrorMessage("Error while creating Blockchain...", err))
}

export const getBlockchain = () => {
  return axios.get(`${SERVER_API}/blockchain`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}

export const updateBlockchain = blockchainUpdateData => {
  return axios.put(`${SERVER_API}/blockchain/update`, { blockchainUpdateData }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  }).then(res => res.data).catch(err => err)
}

export const replaceBlockchain = replaceChainData => {
  return axios.put(`${SERVER_API}/blockchain/replace`, { replaceChainData }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  }).then(res => res.data).catch(err => err)
}