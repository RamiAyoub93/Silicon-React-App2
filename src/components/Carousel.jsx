import React from 'react'

const Carousel = () => {
  return (
    <> 
    <section className="carousel-section">
                <h2 className="h1">How does it work?</h2>
                <div className="container-carousel space-y-3">
                    <div className="carousel">
                        <div className="carousel-item">
                            <img src="/iPhone 12 Pro.png" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="/iPhone 12 Pro (1).png" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="/iPhone 12 Pro (2).png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="text">
                    <h3 className="h4">Latest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, illo!</p>
                </div>
            </section>
    </>
  )
}

export default Carousel