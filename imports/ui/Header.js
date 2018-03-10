import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    returnEmail() {
        return 'mailto:' + this.props.author;
    }

    render() {
        return(
            <div id="headerComponent">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 col-md-2">
                            <a href="https://activecollab.com">
                                <img
                                    id="logoImg" 
                                    className="img-responsive" 
                                    src="https://lh3.googleusercontent.com/MldXK41PI9vPipt0VNcerIzX44BNuIonXMvw3_VqMPGAZ7Xm7DaOhS8zDue4Rwy2jMyo=w300" />
                            </a>
                         </div>
            
                        <div className="col-xs-10 col-md-10 text-left">
                            <h2>Welcome to the Task-slider demo!<br />
                                <small className="text-right">by 
                                <a className="text-right" href={this.returnEmail()}> {this.props.author}</a>
                                </small>
                            </h2>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

Header.propTypes = {
    author: PropTypes.string.isRequired
}

