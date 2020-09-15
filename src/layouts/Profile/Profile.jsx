import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./Profile.scss"

//layouts
import Transactions from '../Transactions/Transactions'
import Blockchain from '../Blockchain/Blockchain'

//components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

//redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { CREATE_BLOCKCHAIN_START, GET_BLOCKCHAIN_START } from '../../redux/blockchain/blockchainTypes'
import {
  CREATE_ACCOUNT_START, GET_ACCOUNT_DETAILS_START,
  GET_ALL_ACCOUNTS_PUBLIC_KEYS_START, GET_ACCOUNT_BALANCE_START
} from '../../redux/account/accountTypes'
import { CREATE_TRANSACTION_START, GET_TRANSACTIONS_START } from '../../redux/transaction/transactionTypes'
import {
  selectBlockchain, selectBlockchainError, selectBlockchainLoading, selectBlockchainSuccess,
  selectBlockchainApiCall
} from '../../redux/blockchain/blockchainSelectors'
import {
  selectBlock, selectBlockApiCall, selectBlockError,
  selectBlockLoading, selectBlockSuccess, selectLastBlock
} from '../../redux/block/blockSelectors'
import {
  selectAccount, selectAccountApiCall, selectAccountError, selectAccountLoading,
  selectAccountSuccess, selectAllAccountsPublicKeys, selectAccountBalance
} from '../../redux/account/accountSelectors'
import {
  selectTransaction, selectTransactions, selectTransactionApiCall,
  selectTransactionError, selectTransactionLoading, selectTransactionSuccess
} from '../../redux/transaction/transactionSelectors'
import { createBlockchainStart, getBlockchainStart, consensusStart } from '../../redux/blockchain/blockchainActions'
import {
  createAccountStart, getAccountStart, getAccountBalanceStart,
  clearAllAccountsPublicKeys, getAllAccountsPublicKeysStart
} from '../../redux/account/accountActions'
import { createTransactionStart, getTransactionsStart } from '../../redux/transaction/transactionActions'
import { mineBlockStart } from '../../redux/block/blockActions'

//assets
import blockchainInitImage from '../../assets/images/blockchainInit.jpg'

//data
import formsData from './formsData'

//keys generation libs
import sha256 from 'sha256'
import uuid from 'uuid/dist/v1'
import { getErrorMessage } from '../../utils/error'

//lazy load layouts
// const Blockchain = React.lazy(() => require("../Blockchain/Blockchain"))

class Profile extends React.Component {

  state = {
    publicKey: "",
    amount: "",
    fee: "",
    privateKey: "",
    selectedTransactions: [],
    formNumber: 0,
    loading: false,
    mining: false,
    consensusLoading: false,
    error: ""
  }

  componentDidMount() {
    const { account } = this.props;
    this.props.getAccountStart(() => { this.props.getAccountBalanceStart(); });
    this.props.getAllAccountsPublicKeysStart();
    this.props.getTransactionsStart();
    const { currentUser } = this.props;
    if (currentUser && currentUser.role === 2)
      this.props.getBlockchainStart();
  }

  consensus = () => {
    this.setState({ consensusLoading: true })
    this.props.consensusStart(() => {
      this.setState({ consensusLoading: false })
    })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  setSelectedTransactions = (selectedTransactions) => {
    this.setState({ selectedTransactions })
  }

  startMining = e => {
    e.preventDefault();
    const { selectedTransactions } = this.state;
    if (selectedTransactions.length > 0) {
      this.setState({ mining: true }, () => {
        setTimeout(() => {
          const { mineBlockStart, account, getAccountBalanceStart } = this.props;
          mineBlockStart(selectedTransactions, () => {
            this.setState({ selectedTransactions: [], mining: false })
            if (account)
              getAccountBalanceStart()
          })
        }, 10000);
      })
    } else alert("Plase Select Atleast One Transaction")
  }

  handleSubmit = (e, formName) => {
    e.preventDefault();
    this.setState({ loading: true })
    const { allAccountsPublicKeys } = this.props;
    switch (formName) {
      case "Initialize Account": {
        try {
          if (allAccountsPublicKeys) {
            while (true) {
              let newUuid = uuid()
              const publicKey = sha256(newUuid);
              const publicKeyIndex = allAccountsPublicKeys.findIndex(el => el.publicKey === publicKey)
              if (publicKeyIndex === -1) {
                newUuid = uuid()
                const privateKey = sha256(newUuid);
                this.setState({ publicKey, privateKey, formNumber: 1, loading: false, error: "" })
                break;
              }
            }
          }
        } catch (error) {
          this.setState({ error: getErrorMessage("Error while generating keys...", error), loading: false })
        }
        break;
      }
      case "Proceed": {
        if (window) {
          const { publicKey, privateKey } = this.state
          const keys = { publicKey: sha256(publicKey), privateKey: sha256(privateKey) }
          localStorage.setItem("securumKeys", JSON.stringify(keys))
          this.setState({ loading: false, formNumber: 2, publicKey: "", privateKey: "" })
        }
        break;
      }
      case "Finish Initialization": {
        if (window) {
          const keys = JSON.parse(localStorage.securumKeys);
          this.props.createAccountStart(keys, () => {
            localStorage.removeItem("securumKeys");
            this.setState({ loading: false, formNumber: 0 })
          }, () => this.setState({ loading: false }))
        }
        break;
      }
      case "Create Transaction": {
        try {
          let { publicKey, privateKey, amount, fee } = this.state;
          publicKey = sha256(publicKey)
          privateKey = sha256(privateKey)
          this.props.createTransactionStart({ publicKey, privateKey, amount, fee: fee || 0 }, () => {
            this.setState({ publicKey: "", amount: "", fee: "", privateKey: "", loading: false })
          })
        } catch (error) {
          this.setState({ error: getErrorMessage("Error while making transaction...", error), loading: false })
        }
        break;
      }
    }
  }

  render() {
    const {
      currentUser, blockchain, blockchainError, blockchainLoading, createBlockchainStart,
      blockchainSuccess, blockchainApiCall, transactions, transaction, transactionError,
      transactionApiCall, transactionLoading, transactionSuccess,
      block, blockApiCall, blockError, blockLoading, blockSuccess,
      accountBalance,
      account, accountError, accountApiCall, accountLoading, createAccountStart, accountSuccess,
    } = this.props;
    const { formNumber, loading, mining: blockMining, consensusLoading } = this.state;
    return (

      <section className="profile-page spad" >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-2 order-md-1">
              <div className="row">
                {/* <!-- blog item --> */}
                <div className="col-md-12">
                  <div className="profile-item bi-feature">
                    {blockchainError && (
                      <div className="alert alert-danger" role="alert">
                        {blockchainError}
                      </div>
                    )}
                    {blockchainSuccess && (
                      <div className="alert alert-success" role="alert">
                        Everythings Looks Fine... You have successfully got copy of blockchain...
                      </div>
                    )}
                    <figure className="profile-thumb">
                      {currentUser && currentUser.role === 2 && blockchainApiCall === GET_BLOCKCHAIN_START
                        ? (
                          <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) :
                        (
                          <>
                            {currentUser && currentUser.role === 2 && !blockchain ?
                              (
                                <>
                                  <img src={blockchainInitImage} alt="" />
                                  <button
                                    className="btn btn-success getBlockchainBtn"
                                    onClick={createBlockchainStart}
                                  >
                                    {blockchainLoading && blockchainApiCall === CREATE_BLOCKCHAIN_START ? (
                                      <div className="spinner-border text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                      </div>
                                    ) : "Get Your Blockchain"}
                                  </button>
                                </>
                              ) : (
                                <Transactions
                                  currentUser={currentUser}
                                  selectedTransactions={this.state.selectedTransactions}
                                  setSelectedTransactions={this.setSelectedTransactions}
                                  startMining={this.startMining}
                                  transactions={transactions}
                                  blockLoading={blockLoading}
                                  blockMining={blockMining}
                                  blockApiCall={blockApiCall}
                                  blockError={blockError}
                                  blockSuccess={blockSuccess}
                                />
                              )}
                          </>
                        )
                      }
                    </figure>
                    <div className="profile-text">
                      <div className="post-date">22 jan 2018</div>
                      <h4 className="profile-title"><Link to="single-blog.html">This Week in Securum: Up, Down and Sideways</Link></h4>
                      <div className="post-meta">
                        <Link to=""><span>by</span> Admin</Link>
                        <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                        <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                      </div>
                      <p>Securum is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                      <Link to="" className="readmore">Readmore <i className="fa fa-angle-double-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="post-loadmore site-btn sb-gradients sbg-line mt-5"
                onClick={this.consensus}
              >
                {consensusLoading && (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) || "CONSENSUS"}
              </button>
            </div>
            <div className="col-lg-4 col-md-6 sideber pt-5 pt-lg-0 order-1 order-md-2">
              <ProfileCard member={currentUser} greet={true} />
              {currentUser && (
                <div className="widget-area">
                  <h4 className="widget-title">Account</h4>
                  {!account ? (
                    <form
                      className="widget-account-from"
                      method="post"
                      onSubmit={e => this.handleSubmit(e, formsData[formNumber].formName)}
                    >
                      {formNumber === 1 &&
                        (
                          <div className="keys-area">
                            <strong>Public Key</strong>
                            <p>{this.state.publicKey}</p>
                            <strong>Private Key</strong>
                            <p>{this.state.privateKey}</p>
                          </div>
                        )}
                      <ol>
                        {
                          formsData[formNumber].instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                          ))
                        }
                      </ol>
                      <button
                        className="site-btn sb-full-- sb-gradients"
                        disabled={loading ? "disabled" : ""}
                      >
                        {loading ? (
                          <div className="spinner-border text-light" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : formsData[formNumber].buttonName}
                      </button>
                    </form>
                  ) :
                    (
                      <>
                        <p>
                          <strong>Balance: </strong>
                          {!accountLoading && accountBalance ? accountBalance : ""}
                        </p>
                        <form
                          className="widget-account-from"
                          method="post"
                          onSubmit={e => this.handleSubmit(e, "Create Transaction")}
                        >
                          <input
                            type="text"
                            placeholder="Recipient Public Key"
                            name="publicKey"
                            value={this.state.publicKey}
                            onChange={this.handleChange}
                          />
                          <input
                            type="text"
                            placeholder="Sender Private Key"
                            name="privateKey"
                            value={this.state.privateKey}
                            onChange={this.handleChange}
                          />
                          <input
                            type="number"
                            placeholder="Amount to Send"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.handleChange}
                          />
                          <input
                            type="number"
                            placeholder="Extra Fee for Miner"
                            name="fee"
                            value={this.state.fee}
                            onChange={this.handleChange}
                          />
                          {transactionError && (
                            <div className="alert alert-danger" role="alert">
                              {transactionError}
                            </div>
                          )}
                          {transactionSuccess && (
                            <div className="alert alert-success" role="alert">
                              Transaction Success...
                            </div>
                          )}
                          <button className="site-btn sb-full-- sb-gradients">
                            {transactionLoading ? (
                              <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : "Send"}
                          </button>
                        </form>
                      </>
                    )
                  }
                </div>
              )}
            </div>
          </div>
          {currentUser && currentUser.role === 2 && <Blockchain />}
        </div >
      </section >
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  blockchain: selectBlockchain,
  blockchainLoading: selectBlockchainLoading,
  blockchainError: selectBlockchainError,
  blockchainSuccess: selectBlockchainSuccess,
  blockchainApiCall: selectBlockchainApiCall,
  block: selectBlock,
  blockLoading: selectBlockLoading,
  blockError: selectBlockError,
  blockSuccess: selectBlockSuccess,
  blockApiCall: selectBlockApiCall,
  account: selectAccount,
  accountLoading: selectAccountLoading,
  accountError: selectAccountError,
  accountSuccess: selectAccountSuccess,
  accountApiCall: selectAccountApiCall,
  allAccountsPublicKeys: selectAllAccountsPublicKeys,
  transaction: selectTransaction,
  transactions: selectTransactions,
  transactionLoading: selectTransactionLoading,
  transactionError: selectTransactionError,
  transactionSuccess: selectTransactionSuccess,
  transactionApiCall: selectTransactionApiCall,
  accountBalance: selectAccountBalance
})

const mapDispatchToProps = {
  createBlockchainStart,
  getBlockchainStart,
  createAccountStart,
  getAccountStart,
  clearAllAccountsPublicKeys,
  getAllAccountsPublicKeysStart,
  getTransactionsStart,
  createTransactionStart,
  mineBlockStart,
  getAccountBalanceStart,
  consensusStart
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
