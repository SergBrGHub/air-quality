import React , {useState}  from 'react';
import './hero_block.scss'

const HeroBlock = ({header, links, sponsor_logo}) => {
    const sponsor_logo_img = sponsor_logo.map((item, idx) => <img src={item} alt="sponsor_logo_img" className="hero-sponsor-block-item" key={idx}/>);
    const nav_links = links.map((item, idx) => <a href={item.href} className="hero-nav-links-item" key={idx}>{item.title}</a>);

    const isMobile = window.matchMedia(`(max-width: 414px)`).matches;

    const [isBurgerMenuShowing, setBurgerMenuShowing] = useState(false);

    const toggleBurgerMenu = (newValue) => {
		setBurgerMenuShowing(newValue);
	}

    return (
        <section className="hero">
            <div className="container">
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