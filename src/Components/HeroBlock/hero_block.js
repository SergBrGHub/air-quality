import React , {useState}  from 'react';
import './hero_block.scss'

const HeroBlock = ({header, links, sponsor_logo}) => {
    const sponsor_logo_img = sponsor_logo.map((item, idx) => <img src={item} alt="sponsor_logo_img" className="hero-sponsor-block-item" key={idx}/>);
    const nav_links = links.map((item, idx) => <a href={item.href} className="hero-nav-links-item" key={idx}>{item.title}</a>);

    const nav_links_burgermenu = links.map((item, idx) => <a href={item.href} className="burger-menu-links-item" key={idx}>{item.title}</a>);

    const isMobile = window.matchMedia(`(max-width: 414px)`).matches;


    const [isBurgerMenuShowing, setBurgerMenuShowing] = useState(false);

    const toggleBurgerMenu = (newValue) => {
        setBurgerMenuShowing(newValue);
        // console.log('click ok');
	}

    return (
        <section className="hero">
            <div className="container">
                { isMobile && isBurgerMenuShowing &&
                  <div className={`burger-menu ${isBurgerMenuShowing ? "burger-menu-show" : ""}`}>
                    
                    <div className="burger-menu-navbar">
                      <div className="burger-menu-navbar-close " onClick={() => toggleBurgerMenu(false)}>
                        <div className="burger-menu-navbar-close1"></div>
                        <div className="burger-menu-navbar-close2"></div>
                        <div className="burger-menu-navbar-close3"></div>
                      </div>
                      <div className="burger">
                        <div className="burger-bar"></div>
                        <div className="burger-bar"></div>
                        <div className="burger-bar"></div>
                      </div>
                    </div>

                    <nav className="burger-menu-links">
                        {nav_links_burgermenu}
                    </nav>

                    <p className="burger-menu-text">
                        2020, Все права защищены
                    </p>
                    <p className="burger-menu-text">
                        Согласие на обработку персональных данных <br/>
                        Политика конфиденциальности
                    </p>

                  </div>

                }
                
                <div className="hero-sponsor-block">
                    {sponsor_logo_img}
                      { isMobile ?
                        <div className="burger" onClick={() => toggleBurgerMenu(true)}>
                          <div className="burger-bar"></div>
                          <div className="burger-bar"></div>
                          <div className="burger-bar"></div>
                        </div>
                        : null 
                      }
                </div>

                { !isMobile ? (
                    <nav className="hero-nav-links">
                        {nav_links}
                    </nav> )
                : null }

                <h1 className="hero-header">{header}</h1>

                <a className="hero-button" href="#id">Отследить</a>
  
            </div>
        </section>
    );
};

export default HeroBlock;