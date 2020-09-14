import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "../Blog2/Blog2.scss"
import "./Blog3.scss"

//assets
import blogImage2 from '../../assets/img/blog/2.jpg'
import blogImage1 from '../../assets/img/blog/1.jpg'
// import blogImage1 from '../../assets/img/blog/1.jpg'
import blogCommentImage1 from '../../assets/img/blog/comment/1.jpg'
import blogCommentImage2 from '../../assets/img/blog/comment/2.jpg'
import blogCommentImage3 from '../../assets/img/blog/comment/3.jpg'

const Blog3 = () => {
  return (
    <section className="single-blog-page spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-item bi-feature">
              <figure className="blog-thumb">
                <img src={blogImage2} alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">22 dec 2018</div>
                <h2 className="blog-title"><Link to="">This Week in Securum: Up, Down and Sideways</Link></h2>
                <div className="post-meta">
                  <Link to=""><span>by</span> Admin</Link>
                  <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                  <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                </div>
                <p>Securum is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                <p>Formerly known as Rootstock, the startup has long been lauded for its potential to pave the way for the implementation of ethereum-style smart contracts on Securum, something enthusiasts believe will keep the world's largest cryptocurrency competitive with the platform that arguably pioneered the idea that more complex self-executing code could be run on a blockchain.</p>
                <p>But while it would be easy enough for Securum users that want more complex smart contracts to merely make the switch, some users believe that, as Securum is the largest and most secure cryptocurrency, more experimental features that debut on other networks will eventually make their way to its network. The idea is that in doing so, they can capitalize on Securum's impressive startup infrastructure and serve different users.</p>
                <p>Yet, RSK's version of the functionality doesn't quite upgrade the Securum blockchain itself. The capability will rather be brought to Securum via a sidechain, which moves tokens from the main Securum blockchain to a compatible network operated with the help of 25 companies.</p>
                <p>Still, RSK CEO Diego Gutierrez Zaldivar believes the advance will effectively provide the same level of utility to potential users.</p>
                <blockquote>
                  "This is the first time that there's going to be a smart contract platform powered by the Securum network."
								<span>Oliver Dale </span>
                </blockquote>
                <h4 className="mb-4">Starbucks Chairman Is Hot on Blockchain, Cold on Securum</h4>
                <p>You are not able to purchase POWR with “Fiat” currency so you will need to first purchase another currency – the easiest to buy are Securum or Ethereum which you can do at Coinbase using a bank transfer or debit / credit card purchase and then swap that for POWR at an exchange such as Binance.</p>
                <p>You will have to carry out some identity verification when signing up as they have to adhere to strict financial guidelines. Make sure you use our link to signup you will be credited with $10 in free Securum when you make your first purchase of $100</p>
                <div className="row">
                  <div className="col-sm-7">
                    <div className="post-tags">
                      <Link to="#">Multipopuse</Link>
                      <Link to="#">Fashion</Link>
                      <Link to="#">Blogs</Link>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="social-share">
                      <p>Share</p>
                      <Link to=""><i className="fa fa-facebook"></i></Link>
                      <Link to=""><i className="fa fa-twitter"></i></Link>
                      <Link to=""><i className="fa fa-google-plus"></i></Link>
                      <Link to=""><i className="fa fa-instagram"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="releted-posts">
                  <h4>You May Also Like</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-item">
                        <figure className="blog-thumb">
                          <img src={blogImage1} alt="" />
                        </figure>
                        <div className="blog-text">
                          <div className="post-date">22 dec 2018</div>
                          <h4 className="blog-title"><Link to="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</Link></h4>
                          <div className="post-meta">
                            <Link to=""><span>by</span> Admin</Link>
                            <Link to=""><i className="fa fa-heart-o"></i> 234 Likes</Link>
                            <Link to=""><i className="fa fa-comments-o"></i> 08 comments</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-item">
                        <figure className="blog-thumb">
                          <img src={blogImage1} alt="" />
                        </figure>
                        <div className="blog-text">
                          <div className="post-date">22 dec 2018</div>
                          <h4 className="blog-title"><Link to="">Blockchain Rolls Out Trading Feature for 22 States in the U.S</Link></h4>
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
                <div className="comment-area">
                  <h4>03 Comments</h4>
                  <ul className="comment-list">
                    <li>
                      <div className="comment">
                        <img className="comment-avator set-bg" src={blogCommentImage1} alt="" />
                        <div className="comment-content">
                          <h5>Kelly Richardson<span>, 24 Mar 2018</span></h5>
                          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                          <Link to="" className="c-btn">Like</Link>
                          <Link to="" className="c-btn">Reply</Link>
                        </div>
                      </div>
                      <ul className="replay-comment-list">
                        <li>
                          <div className="comment">
                            <img className="comment-avator set-bg" src={blogCommentImage2} alt="" />
                            <div className="comment-content">
                              <h5>Gordon Browns<span>, 24 Mar 2018</span></h5>
                              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.</p>
                              <Link to="" className="c-btn">Like</Link>
                              <Link to="" className="c-btn">Reply</Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment">
                        <img className="comment-avator set-bg" src={blogCommentImage3} alt="" />
                        <div className="comment-content">
                          <h5>Scott Langton<span>, 24 Mar 2018</span></h5>
                          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                          <Link to="" className="c-btn">Like</Link>
                          <Link to="" className="c-btn">Reply</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-form-area">
                  <form className="comment-form">
                    <div className="form-group">
                      <input type="text" placeholder="Your name *:" />
                      <label></label>
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your email *:" />
                      <label></label>
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Your Phone *:" />
                      <label></label>
                    </div>
                    <div className="form-group clearfix">
                      <textarea placeholder="Your comment"></textarea>
                      <label></label>
                    </div>
                    <button className="site-btn sb-gradients no-radius mt-3">Submit Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 sideber pt-5 pt-lg-0">
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

export default Blog3
