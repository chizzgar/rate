import React from 'react';
import './Error404.css';

class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {



        return (

            <div className="error">
                <div className="error404">
                    <div> <h1>404</h1></div>
                    <div> <h3>&emsp;Page not found</h3></div>
                </div>
            </div>
        );
    }
}
export default Error404;