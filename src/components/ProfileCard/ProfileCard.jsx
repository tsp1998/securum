import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./ProfileCard.scss"

const ProfileCard = ({ member }) => {
  return (
    <div className="member">
      <div className="member-text">
        <img className="member-img set-bg" src={require(`../../assets/img/profiles/${member.image}.jpg`)} />
        <h2>{member.name}</h2>
        <span>{member.role}</span>
      </div>
      <div className="member-social">
        <Link to={member.fbLink}><i className="fa fa-facebook"></i></Link>
        <Link to={member.liLink}><i className="fa fa-linkedin"></i></Link>
        <Link to={member.twitterLink}><i className="fa fa-twitter"></i></Link>
      </div>
      <div className="member-info">
        <img className="member-img mf set-bg" src={require(`../../assets/img/profiles/${member.image}.jpg`)} />
        <div className="member-meta">
          <h2>{member.name}</h2>
          <span>{member.role}</span>
        </div>
        <p>{member.bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard
