import React from 'react';
import './msliderSection.scss';

const MsliderSection = () => {
    return (
        <section className="mslider-section">             
            <div className="mslider-section-container wrapper">          
                <div className="mslider">
                    <div>
                        <div className="mslide-container ">
                            <div className="percent-container">
                                <span className="percent-text">
                                    %50
                                </span>
                            </div>
                            <div className="slide-text-container">
                                <h3 className="slide-title">
                                    İLK FALINDA <span className="accent-text">İNDİRİM</span> SENİ BEKLİYOR!
                                </h3>
                                <p className="slide-text">
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                </p>
                            </div>                  
                        </div>
                    </div>
                    <div>
                        <div className="mslide-container ">
                            <div className="percent-container">
                                <span className="percent-text">
                                    %30
                                </span>
                            </div>
                            <div className="slide-text-container">
                                <h3 className="slide-title">                    
                                    Lorem ipsum dolor <span className="accent-text">sit amet,</span> consectetur adipisicing elit.
                                </h3>
                                <p className="slide-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aliquam et quis reiciendis est quaerat, consectetur assumenda! Quos, quisquam illo libero adipisci voluptate excepturi hic.
                                </p>
                            </div>                  
                        </div>             
                    </div>
                    <div>
                        <div className="mslide-container ">
                            <div className="percent-container">
                                <span className="percent-text">
                                    %40
                                </span>
                            </div>
                            <div className="slide-text-container">
                                <h3 className="slide-title">                    
                                    Lorem ipsum dolor sit amet, <span className="accent-text">consectetur</span> adipisicing elit. Hic officia eius atque?
                                </h3>
                                <p className="slide-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos autem adipisci, earum, accusamus inventore dolorum. Nisi, vitae in ratione eligendi!
                                </p>
                            </div>                  
                        </div>              
                    </div>
                    <div>
                        <div className="mslide-container ">
                            <div className="percent-container">
                                <span className="percent-text">
                                    %80
                                </span>
                            </div>
                            <div className="slide-text-container">
                                <h3 className="slide-title">                    
                                    <span className="accent-text">Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit. <span className="accent-text">Nemo</span> vel maxime nobis alias aliquam!
                                </h3>
                                <p className="slide-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nisi voluptatibus quasi, odit ut assumenda nihil? Ipsam, similique, minima. Reprehenderit, voluptatem!
                                </p>
                            </div>                  
                        </div>              
                    </div>
                </div>

            </div>                            
        </section> 
    );
}

export default MsliderSection;