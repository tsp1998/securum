import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./Blog.scss"

//assets
import blogImage1 from '../../assets/img/blog/1.jpg'
import blogImage2 from '../../assets/img/blog/2.jpg'
import blogImage3 from '../../assets/img/blog/3.jpg'

const Blog = () => {
  return (
    <section className="blog-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Latest News</h2>
          <p>Securum is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
          {/* <!-- blog item --> */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src={blogImage1} alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">03 jan 2018</div>
                <h4 className="blog-title"><Link to="">Coinbase to Reopen the GDAX Securum Cash-Euro Order Book</Link></h4>
                <div className="post-meta">
                  <Link to=""><span>by</span> Admin</Link>
                  <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                  <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- blog item --> */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src={blogImage2} alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 dec 2018</div>
                <h4 className="blog-title"><Link to="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</Link></h4>
                <div className="post-meta">
                  <Link to=""><span>by</span> Admin</Link>
                  <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                  <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- blog item --> */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src={blogImage3} alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 aug 2018</div>
                <h4 className="blog-title"><Link to="">This Week in Securum: Up, Down and Sideways</Link></h4>
                <div className="post-meta">
                  <Link to=""><span>by</span> Admin</Link>
                  <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                  <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
