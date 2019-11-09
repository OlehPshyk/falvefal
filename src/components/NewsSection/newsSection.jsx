import React from 'react';
import './newsSection.scss';

const NewsSection = () => {
    return (
        <section className="news-section">
            <div className="wrapper">
                <div className="news-section-container">
                    <h3 className="news-title">
                        AVANJLARDAN HABERDAR OLMAK İSTER MİSİN?
                    </h3>
                    <p className="news-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                    </p>
                    <div className="form-container">
                        <form className="form news-form" id="news-form" action="" method="">              
                            <div className="input-group">
                                <input className="input-control news-input-control" type="email" placeholder="E-POSTA" id="news-email" required />
                                <button className="news-submit-button">GÖNDER</button>
                            </div>                
                            <div className="news-form-message" id="news-form-message"></div>              
                        </form> 
                    </div>                         
                </div>        
            </div>                                   
        </section>
    );
}

export default NewsSection;