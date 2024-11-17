import React from 'react'

const AppFeatures = () => {
  return (
    <>
    <section aria-label="app-features" className="features">
                <div className="container">
                    <div className="iphone">
                        <img src="/iphone-card.png" alt="iphone with card" />
                    </div>
                    <div className="text space-y-3">
                        <h2 className="h1">App Features</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/icon.svg" alt="" />
                                </div>
                                <div>
                                    <h3 className="h5">Easy Payments</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/icon (1).svg" alt="" />
                                </div>
                                <div>
                                    <h3 className="h5">Data Security</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/icon (2).svg" alt="" />
                                </div>
                                <div>
                                    <h3 className="h5">Cost Statistics</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/icon (3).svg" alt="" />
                                </div>
                                <div>
                                    <h3 className="h5">Support 24/7</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/icon (4).svg" alt="" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="h5">Regular Cashback</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!</p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/icon (5).svg" alt="" />
                                </div>
                                <div>
                                    <h3 className="h5">Top Standards</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AppFeatures