import React from 'react'
import './footer.scss'

const Footer = ({f_sponsor_logo, f_links}) => {
    const sponsor_logo_item = f_sponsor_logo.map((item, idx) => <img src={item} className={'footer-sponsor-item'} key={idx} alt={'sponsor logo'}/>);
    const links_item = f_links.map((item, idx) => <a href={item.href} className={'footer-nav-link'} key={idx}>{item.title}</a>);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-sponsor">
                    {sponsor_logo_item}
                </div>
                <div className="footer-text-wrap">
                    <div className="footer-nav">
                        {links_item}
                    </div>
                    <p className="footer-nav-text">
                    Сайт был разработан <span className="text-yellow">Сергеем Брюман</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-yellow">Валерией Бубырь</span>.
                    </p>
                </div>

                <p className="footer-text">
                    2020, Все права защищены
                </p>
                <p className="footer-text">
                    Согласие на обработку персональных данных <br/>
					Политика конфиденциальности
                </p>
            </div>
        </footer>
    );
};

export default Footer;
