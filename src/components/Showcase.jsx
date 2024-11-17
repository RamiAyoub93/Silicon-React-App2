import React from 'react'

const Showcase = () => {
  return (
    <>
    <section aria-label="showcase" className="showcase">
            <div className="showcase-content">
                <div className="show-container space-y-3">
                    <h1 className="d4">Manage All Your Money in One App</h1>
                    <div className="content space-y-3">
                        <p className="text-lg">We offer you a new generation of
                            mobile banking. Save, spend &amp; manage money in
                            your pocket.
                        </p>
                        <div className="market-btns">
                            <a href="#" className="store-btn">
                                <img src="/googleplay-light.svg" alt="" />
                            </a>
                            <a href="#" className="store-btn">
                                <img src="/appstore-light.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="more">
                        <a href="#features" className="btn-round btn-white">
                            <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <span>Discover More</span>
                    </div>
                </div>
        
                <div className="iphone-img-container">
                    <img src="/image.svg" alt="two iPhones with charts and a credit card on the screen" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Showcase