import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./Block.scss"

//assets
import securumCoin from '../../assets/images/securumCoin.jpg'

const Block = (props) => {
  const { addArrowclassName, block, index } = props
  return (
    <div className={`blockchain-step ${addArrowclassName}`}>
      <figure className="blockchain-icon">
        <img src={securumCoin} alt="#" />
      </figure>
      <h4>Block {index}</h4>
      <p><strong>Nonce: </strong>{block.nonce}</p>
      <p><strong>Hash: </strong>{block.hash}</p>
      <p><strong>Prev. Block Hash: </strong>{block.prevBlockHash}</p>
      <Link to={`/block?${block.hash}`} className="btn btn-primary mt-3">Show More</Link >
    </div>
  )
}

export default Block
