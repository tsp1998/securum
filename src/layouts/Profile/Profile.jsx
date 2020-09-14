import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./Profile.scss"

//components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

//data
import members from '../../data/members'

//assets
import blogImage2 from '../../assets/img/blog/2.jpg'
import blogImage1 from '../../assets/img/blog/1.jpg'
import blogImage3 from '../../assets/img/blog/3.jpg'
import blogImage4 from '../../assets/img/blog/4.jpg'
import blogImage5 from '../../assets/img/blog/5.jpg'
import blogImage6 from '../../assets/img/blog/6.jpg'
import blogImage7 from '../../assets/img/blog/7.jpg'

const Profile = () => {
  return (
    <section className="profile-page spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-md-1">
            <div className="row">
              {/* <!-- blog item --> */}
              <div className="col-md-12">
                <div className="blog-item bi-feature">
                  <figure className="blog-thumb">
                    <img src={blogImage2} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">22 jan 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">This Week in Securum: Up, Down and Sideways</Link></h4>
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
              {/* <!-- blog item --> */}
              <div className="col-md-6">
                <div className="blog-item">
                  <figure className="blog-thumb">
                    <img src={blogImage1} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">22 dec 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">Blockchain Rolls Out Trading Feature for 22 States in the U.S</Link></h4>
                    <div className="post-meta">
                      <Link to=""><span>by</span> Admin</Link>
                      <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                      <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- blog item --> */}
              <div className="col-md-6">
                <div className="blog-item">
                  <figure className="blog-thumb">
                    <img src={blogImage3} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">28 aug 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">This Week in Securum: Up, Down and Sideways</Link></h4>
                    <div className="post-meta">
                      <Link to=""><span>by</span> Admin</Link>
                      <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                      <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- blog item --> */}
              <div className="col-md-6">
                <div className="blog-item">
                  <figure className="blog-thumb">
                    <img src={blogImage4} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">22 jan 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">Indians Expect Clarity on Securum Taxes within Days</Link></h4>
                    <div className="post-meta">
                      <Link to=""><span>by</span> Admin</Link>
                      <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                      <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- blog item --> */}
              <div className="col-md-6">
                <div className="blog-item">
                  <figure className="blog-thumb">
                    <img src={blogImage5} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">22 dec 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">Thailand Taking Steps to Regulate ICOs</Link></h4>
                    <div className="post-meta">
                      <Link to=""><span>by</span> Admin</Link>
                      <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                      <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- blog item --> */}
              <div className="col-md-6">
                <div className="blog-item">
                  <figure className="blog-thumb">
                    <img src={blogImage6} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">22 jan 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">Discover Card’s 44 Million Customers Denied Crypto</Link></h4>
                    <div className="post-meta">
                      <Link to=""><span>by</span> Admin</Link>
                      <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                      <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- blog item --> */}
              <div className="col-md-6">
                <div className="blog-item">
                  <figure className="blog-thumb">
                    <img src={blogImage7} alt="" />
                  </figure>
                  <div className="blog-text">
                    <div className="post-date">22 dec 2018</div>
                    <h4 className="blog-title"><Link to="single-blog.html">Wall Street Price Manipulation? Go Long</Link></h4>
                    <div className="post-meta">
                      <Link to=""><span>by</span> Admin</Link>
                      <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                      <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="post-loadmore site-btn sb-gradients sbg-line mt-5">LOAD MORE</button>
          </div>
          <div className="col-lg-4 col-md-6 sideber pt-5 pt-lg-0 order-1 order-md-2">
            <ProfileCard member={members[0]} />
            <div className="widget-area">
              <h4 className="widget-title">News Letter</h4>
              <p>Receive our newsletter to stay on top of the latest posts.</p>
              <form className="widget-subscribe-from">
                <input type="text" placeholder="Enter your email" />
                <button className="site-btn sb-full-- sb-gradients">Subscribe</button>
              </form>
            </div>

            <div className="widget-area">
              <div className="widget">
                <h4 className="widget-title">Categories</h4>
                <ul>
                  <li><Link to="#">Prediction markets</Link></li>
                  <li><Link to="#">Storage</Link></li>
                  <li><Link to="#">Token exchange</Link></li>
                  <li><Link to="#">Computation</Link></li>
                  <li><Link to="#">Identity</Link></li>
                  <li><Link to="#">ICOs</Link></li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title">Popular Posts</h4>
                <ul className="popular-posts">
                  <li>
                    <span>22 dec 2018</span>
                    <h5><Link to="">Lightning and Mainnet: A Look at the Protocol’s Hype, Trials, and Error</Link></h5>
                  </li>
                  <li>
                    <span>22 dec 2018</span>
                    <h5><Link to="">This Week in Securum: Japan Gets Goxxed and Iota Gets Into a Tangle</Link></h5>
                  </li>
                  <li>
                    <span>22 dec 2018</span>
                    <h5><Link to="">Securum Futures Report Shows Bullish Sentiment Is In the Air</Link></h5>
                  </li>
                  <li>
                    <span>22 dec 2018</span>
                    <h5><Link to="">Why Venezuela’s New National Cryptocurrency El Petro Will Fail</Link></h5>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title">Recent Tweets</h4>
                <ul className="twitter-widget">
                  <li>
                    <h5>Why Does The Securum Price Move So Much?</h5>
                    <Link to="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</Link>
                    <span>4 days ago</span>
                  </li>
                  <li>
                    <h5>How Can I Trade Securum without an Exchange?</h5>
                    <Link to="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</Link>
                    <span>4 days ago</span>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title">Follow Us</h4>
                <div className="social">
                  <Link to="" className="facebook"><i className="fa fa-facebook"></i></Link>
                  <Link to="" className="google"><i className="fa fa-google-plus"></i></Link>
                  <Link to="" className="instagram"><i className="fa fa-instagram"></i></Link>
                  <Link to="" className="twitter"><i className="fa fa-twitter"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
