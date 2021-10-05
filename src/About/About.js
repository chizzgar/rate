import React from 'react';
import './About.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {



        return (

            <div class="about-section">
                <h1>О нас</h1>
                <p>Текст о том, кто мы и чем занимаемся.</p>
                <p>Текст о нашей компании и наших партнёрах в данной сфере.</p>
            </div>
        );
    }
}
export default About;