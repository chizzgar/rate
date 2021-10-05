import React from 'react';
import './Offices.css';

class Offices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {



        return (
            <div class="about-section">
                <ul className="list-unstyled">
                    <li><h3 >Главный офис</h3></li>
                    <li><h3 >Пункты обмена</h3></li>
                    <li><h3 >Наши филиалы</h3></li>
                </ul>
            </div>
        )
    }
}
export default Offices;