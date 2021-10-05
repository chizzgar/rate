import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {}
        }
        this.currency = ['USD', 'RUB', 'GBP', 'CHF'];


    }
    componentDidMount() {
        this.getRate();
    }

    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=2873a3b8cb64910479a4c3221f4dd1b2')

            .then(data => {
                return data.json()
            })
            .then(data => {
                console.log(data);
                this.setState({ date: data.date });
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                console.log(result);
                this.setState({ currencyRate: result })
            });
    }

    render() {



        return (

            <div className="rate">
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map((keyName, i) => (
                        <div key={keyName} className="block flex-item">
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
                            <p>Можно купить за 1 EURO</p>
                            {/* <div className="currency-out">1200 Kr</div> */}
                        </div>
                    )
                    )}
                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }
}
export default Rate;