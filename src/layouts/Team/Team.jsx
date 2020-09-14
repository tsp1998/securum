import React from 'react'

//css
import "./Team.scss"

//assets
import members from '../../data/members'

//components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Team = () => {
  return (
    <section className="team-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Meet Our Team</h2>
          <p>Our experts in the field of crypto currency can always help you with any of your questions!</p>
        </div>
      </div>
      <div className="team-members clearfix">
        {/* <!-- Team member --> */}
        {members.map((member, i) => (
          <ProfileCard key={i} member={member} />
        ))}
      </div>
    </section>
  )
}

export default Team
