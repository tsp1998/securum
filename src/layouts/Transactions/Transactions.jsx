import React, { useState } from 'react'

//css
import "./Transactions.scss"

const Transactions = (props) => {
  const { transactions, blockApi, blockLoading, block, blockSuccess, blockError,
    blockMining, selectedTransactions, setSelectedTransactions, currentUser } = props
  const handleChange = e => {
    const { value, checked } = e.target;
    let modifiedSelectTransactions;
    if (checked) modifiedSelectTransactions = [...new Set([...selectedTransactions, value])]
    else {
      modifiedSelectTransactions = [...selectedTransactions];
      modifiedSelectTransactions.splice(value, 1)
    }
    props.setSelectedTransactions(modifiedSelectTransactions)
  }
  return (
    <div className="transactions">
      <div className="table-info d-flex justify-content-around align-items-center">
        <h2 className="pt-3">Transactions</h2>
        {currentUser && currentUser.role === 2 && <button className="btn btn-primary" onClick={props.startMining}>
          {blockMining ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : "Start Mining"}
        </button>}
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Fee</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={i}>
              <th>
                {transaction.status === 0 && (
                  <input
                    type="checkbox"
                    checked={selectedTransactions.indexOf(transaction._id) === -1 ? "" : "checked"}
                    value={transaction._id}
                    onChange={handleChange}
                  />
                )}
              </th>
              <th scope="row">{i + 1}</th>
              <td>{transaction._id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.fee}</td>
              <td>
                {transaction.status === 0 && (<button className="btn btn-warning">Pending</button>)}
                {transaction.status === 1 && (<button className="btn btn-success">Done</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
