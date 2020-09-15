import React from 'react'
//css
import "./Blockchain.scss"

//components
import Block from '../../components/Block/Block'

//redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectBlockchain, selectBlockchainLoading } from '../../redux/blockchain/blockchainSelectors'
import { getBlockchainStart } from '../../redux/blockchain/blockchainActions'

class Blockchain extends React.Component {

  componentDidMount() {
    this.props.getBlockchainStart();
  }

  render() {
    const { blockchain, blockchainLoading } = this.props;
    return (
      <section className="blockchain-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Securum Cryptocurrency</h2>
            <p>Start learning about Securum with interactive tutorials. It’s fun, easy, and takes only a few minutes! </p>
          </div>
          <div className="row d-flex justify-content-center">
            {blockchainLoading && (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) || blockchain && blockchain.chain.map((block, i) => (
              <div key={i} className="col-md-4 process mb-5">
                <Block
                  block={block}
                  index={i + 1}
                  addArrowclassName={i % 3 !== 2 && i !== blockchain.chain.length-1 ? "addArrowClass" : ""}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  blockchain: selectBlockchain,
  blockchainLoading: selectBlockchainLoading
})

const mapDispatchToProps = {
  getBlockchainStart
}


export default connect(mapStateToProps, mapDispatchToProps)(Blockchain)
