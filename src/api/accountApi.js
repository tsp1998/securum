import axios from 'axios'
import { SERVER_API } from '../constants/urls'

export const createAccount = (account) => {
  return axios.post(`${SERVER_API}/account/create`, { account }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => res.data)
    .catch(err => err)
}

export const getAccount = () => {
  return axios.get(`${SERVER_API}/account`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}

export const getAccountBalance = (user) => {
  return axios.post(`${SERVER_API}/account/getAccountBalance`, { user }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}

export const getAllAccountsPublicKeys = () => {
  return axios.get(`${SERVER_API}/account/getAllAccountsPublicKeys`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}