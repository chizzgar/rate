import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {



        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://itgid.info">2021 &copy; Курс валют</a></h1>
                                <p> All Rights Reserved</p>

                            </div>

                            {/* <!-- /.module-body --> */}

                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><p>Новости</p></li>
                                        <br />
                                        <li><p>Биржа</p></li>
                                    </ul>
                                </div>

                                {/* <!-- /.module-body --> */}

                            </div>

                            {/* <!-- /.col --> */}

                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href="/exchangeoffices">Пункты оюмена</a></li>
                                        <li><a href="/about">О нас</a></li>

                                    </ul>
                                </div>

                                {/* <!-- /.module-body --> */}

                            </div>

                            {/* <!-- /.col --> */}

                        </div>
                    </div>
                </div>

                <div className="copyright-bar">
                    <div className="flex-container">
                        <div className="flex-item">
                            <ul className="link">
                            </ul>
                        </div>
                        <div className="flex-item">
                            <div className="clearfix payment-methods">
                                <ul>
                                    <img src="/skin/default/images/dummy.png" data-toggle="tooltip" data-placement="top"
                                        data-original-title="www.webmoney.ru" alt="" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;