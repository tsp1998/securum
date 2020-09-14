import React from 'react'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'

//css
import "swiper/swiper.scss"
import "./Review.scss"

//assets
import quoteImage from '../../assets/img/quote.png'
import reviewImage1 from '../../assets/img/review/1.jpg'
import reviewImage2 from '../../assets/img/review/2.jpg'
import reviewImage3 from '../../assets/img/review/3.jpg'

const Review = () => {
  return (
    <section className="review-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 push-8">
            <img src={quoteImage} alt="" className="quote mb-5" />
            <div className="review-text-slider owl-carousel">
              <Swiper slidesPerView={1} autoplay={{delay:1000}}>
                <SwiperSlide>
                  <div className="review-text">
                    <p>"Securum is exciting because it shows how cheap it can be. Securum is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="review-text">
                    <p>"Securum is exciting because it shows how cheap it can be. Securum is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="review-text">
                    <p>"Securum is exciting because it shows how cheap it can be. Securum is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-4 pr-0 pull-3">
            <div className="review-meta-slider owl-carousel pt-5">
              <Swiper slidesPerView={3} autoplay={true}>
                <SwiperSlide>
                  <div className="author-meta">
                    <img className="author-avatar set-bg" src={reviewImage1} />
                    <div className="author-name">
                      <h4>Aaron Ballance</h4>
                      <p>Ceo Securum</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="author-meta">
                    <img className="author-avatar set-bg" src={reviewImage2} />
                    <div className="author-name">
                      <h4>Jackson Nash</h4>
                      <p>Head of Design</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="author-meta">
                    <img className="author-avatar set-bg" src={reviewImage3} />
                    <div className="author-name">
                      <h4>Katy Abrams</h4>
                      <p>Product Manager</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
