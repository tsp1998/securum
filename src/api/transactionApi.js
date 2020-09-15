import axios from 'axios'
import { SERVER_API } from '../constants/urls'

export const createTransaction = (transaction) => {
  return axios.post(`${SERVER_API}/transactions/create`, { transaction }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => res.data)
    .catch(err => err)
}

export const getTransactions = () => {
  return axios.get(`${SERVER_API}/transactions`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}

export const updateTransactions = (transactionsIds) => {
  return axios.put(`${SERVER_API}/transactions/update`, { transactionsIds }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("securumToken")}`
    }
  })
    .then(res => (res.data))
    .catch(err => err)
}