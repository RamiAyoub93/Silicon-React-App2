import React from 'react'

const Recieve = () => {
  return (
    <>
       <section className="recieve-section">
                <div className="recieve-container">
                    <div className="right-content">
                        <img src="/image.png" alt="Large image" className="large-image" />
                    </div>
            
                    <div className="left-content">
                        <h1 className="h1">Receive payment from international bank details</h1>
                        
                        <div className="text-cards">
                            <div className="recieve-card">
                                <div className="icon-container">
                                    <img src="/icon.png" alt="Icon" />
                                </div>
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
            
                            <div className="recieve-card">
                                <div className="icon-container">
                                    <img src="/wallet.png" alt="Wallet Icon" />
                                </div>
                                <p>A elementum and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>
                        <button className="btn-recieve">
                            <p>Learn more</p>
                            <img src="/icon-r.svg" alt="" />
                        </button>
                    </div>
                </div>
            </section> 
    </>
  )
}

export default Recieve