import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../App.css';

class SingleLink extends Component {
    render() {
        return (

              <Link to={this.props.link.url}>{this.props.link.title}</Link>

        );
    }
}

Link.propTypes = {
    link: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
    }),
};

export default SingleLink;
