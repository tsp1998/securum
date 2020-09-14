import React from 'react'

//css
import "./Fact.scss"
import FA from 'react-fontawesome'

const Fact = () => {
  return (
    <section className="fact-section gradient-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>60</h2>
              <p>Support <br /> Countries</p>
              <FA name="bullseye" className="faIcon" />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>12K</h2>
              <p>Transactions  <br /> per hour</p>
              <FA name="sliders" className="faIcon" />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>5B</h2>
              <p>Largest <br /> Transactions</p>
              <FA name="building" className="faIcon" style={{fontSize:"70px"}} />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="fact">
              <h2>240</h2>
              <p>Years <br /> of Experience</p>
              <FA name="user" className="faIcon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fact
