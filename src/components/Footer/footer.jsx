import React from 'react';
import appStore from '../../assets/img/appStore.png';
import googlePlay from '../../assets/img/googlePlay.png';
import secure from '../../assets/img/secure.png';
import visaMastercardPaypal from '../../assets/img/visa-mastercard-paypal.png';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
			<div className="wrapper">
				<div className="footer-container">
					<div className="footer-grid">
						<div className="first-f">              
							<ul className="first-f-list-1">
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">KAHVE FALI</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">TAROT FALI</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">KATİNA</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">İLİŞKİ DANIŞMANI</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">RÜYA YORUMU</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">ASTROLOJİ</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">EL FALI</a></li>
							</ul>
							<ul className="first-f-list-2">
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">NASIL ÇALIŞIR?</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">FAL BAKMAK</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">FAL BAKTIRMAK</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">BLOG</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">SSS</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">HAKKIMIZDA</a></li>
								<li className="first-f-list-item"><a className="first-f-list-link" href="#;">İLETİŞİM</a></li>
							</ul>
							<ul className="first-f-socials">
								<li className="social-item">
									<a className="social-link" href="#;">
										FACEBOOK
									</a>
								</li>
								<li className="social-item">
									<a className="social-link" href="#;">
										TWITTER
									</a>
								</li>
								<li className="social-item">
									<a className="social-link" href="#;">
										PINTEREST
									</a>
								</li>
							</ul>              
						</div>
						<div className="second-f">
							<ul className="second-f-list">
								<li className="second-f-item">
									<a href="#;"> 
										<img src={appStore} alt="appStore" />
									</a>
								</li>
								<li className="second-f-item">
									<a href="#;">
										<img src={googlePlay} alt="googlePlay" />
									</a>
								</li>
							</ul>
						</div>
						<div className="third-f">
							<div className="third-f-img-box-1">
								<img src={secure} alt="secure" />
							</div>
							<span className="third-f-text-1">GÜVENLİ ÖDEME</span>
							<div className="third-f-img-box-2">
								<img src={visaMastercardPaypal} alt="visa-mastercard-paypal" />
							</div>
							<span className="copyright">
								fal&fal &copy; 2018. tüm hakları saklıdır.
							</span>
						</div>
					</div>
				</div>        
			</div>  
		</footer>
    );
}

export default Footer;