import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header"> 
            <div className="wrapper">
                <div className="header-container">
                    <div className="nav-container first">            
                        <ul className="nav-list">
                            <li className="nav-item">
                                <div className="nav-link-dropdown js-dropdown">
                                    <a href="#;" className="dropbtn js-dropbtn">
                                        <span className="dropbtn-text">
                                            FAL TÜRLERİ
                                        </span>
                                    </a>
                                    <div className="dropdown-content">
                                        <ul className="content-list">
                                            <li className="content-item"><a className="content-link" href="#;">Kahve falı</a></li>
                                            <li className="content-item"><a className="content-link" href="#;">Tarot falı</a></li>
                                            <li className="content-item"><a className="content-link" href="#;">Katina</a></li>
                                            <li className="content-item"><a className="content-link" href="#;">İskambil falı</a></li>
                                            <li className="content-item"><a className="content-link" href="#;">Rüya yorumu</a></li>
                                            <li className="content-item"><a className="content-link" href="#;">Astroloji</a></li>
                                            <li className="content-item"><a className="content-link" href="#;">El falı</a></li>
                                        </ul>
                                    </div>                
                                </div>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#;">FALCILAR</a></li>
                            <li className="nav-item"><a className="nav-link" href="#;">ASTROLOJİ</a></li>                       
                        </ul>
                    </div>
                    <div className="logo-container">
                        <a href="./">             
                            
                        </a>
                    </div>
                    <div className="nav-container second">
                        <ul className="nav-list">
                            <li className="nav-item"><a className="nav-link" href="#;">nasıl ÇALIŞIR?</a></li>
                            <li className="nav-item"><a className="nav-link" href="#;">BLOG</a></li>
                            <li className="nav-item"><a className="nav-link" href="#;">SSS</a></li> 
                        </ul>
                        <a className="account-btn-login" href="#modal-login" data-modal-open>                 
                            <span className="account-btn-text">gİRİŞ YAP</span>
                        </a>                               
                    </div>
                    <div className="hamb-btn-container">
                        <button className="hamb-btn">
                            <span className="hamb-icon"></span>
                        </button>
                    </div>
                </div>
            </div> 
            <div className="xs-nav">
                <div className="xs-nav-body">
                    <ul className="xs-nav-list">          
                        <li className="nav-item">
                            <div className="nav-link-dropdown js-dropdown">
                                <a href="#;" className="dropbtn js-dropbtn">
                                    <span className="dropbtn-text">
                                        FAL TÜRLERİ
                                    </span>
                                </a>
                                <div className="dropdown-content">
                                    <ul className="content-list">
                                        <li className="content-item"><a className="content-link" href="#;">Kahve falı</a></li>
                                        <li className="content-item"><a className="content-link" href="#;">Tarot falı</a></li>
                                        <li className="content-item"><a className="content-link" href="#;">Katina</a></li>
                                        <li className="content-item"><a className="content-link" href="#;">İskambil falı</a></li>
                                        <li className="content-item"><a className="content-link" href="#;">Rüya yorumu</a></li>
                                        <li className="content-item"><a className="content-link" href="#;">Astroloji</a></li>
                                        <li className="content-item"><a className="content-link" href="#;">El falı</a></li>
                                    </ul>
                                </div>                
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#;">
                                FALCILAR             
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#;">
                                ASTROLOJİ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#;">
                                nasıl ÇALIŞIR?
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#;">
                                BLOG
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#;">
                                SSS
                            </a>
                        </li>
                    </ul>
                    <div className="account-btn-container">
                        <a className="account-btn-login" href="#modal-login" data-modal-open>                 
                            <span className="account-btn-text">gİRİŞ YAP</span>              
                        </a>                    
                    </div>
                </div>
            </div>        
        </header>
    );
}

export default Header;