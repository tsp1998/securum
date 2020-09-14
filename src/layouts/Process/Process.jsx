import React from 'react'
//css
import "./Process.scss"

//assets
import processIcons1 from '../../assets/img/process-icons/1.png'
import processIcons2 from '../../assets/img/process-icons/2.png'
import processIcons3 from '../../assets/img/process-icons/3.png'

const Process = () => {
  return (
    <section className="process-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Get Started With Securum</h2>
          <p>Start learning about Securum with interactive tutorials. It’s fun, easy, and takes only a few minutes! </p>
        </div>
        <div className="row">
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={processIcons1} alt="#" />
              </figure>
              <h4>Create Your Wallet</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={processIcons2} alt="#" />
              </figure>
              <h4>Create Your Wallet</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
          </div>
          <div className="col-md-4 process">
            <div className="process-step">
              <figure className="process-icon">
                <img src={processIcons3} alt="#" />
              </figure>
              <h4>Create Your Wallet</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
