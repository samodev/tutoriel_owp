import React, { Component } from 'react';
import SingleLink from './Link';
import '../App.css';


import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ALL_LINKS_QUERY = gql`
    query AllLinksQuery {
        allLinks {
          id
          title
          url
        }
    }
`;

class LinkList extends Component {
    render() {
        if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
            return <div>Loading ...</div>;
        }

        if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
            return <div>Error occurred</div>;
        }

        const allLinks = this.props.allLinksQuery.allLinks;
        if (allLinks.length === 0) {
            return <div>No links...</div>;
        }

        return (
            <div >
                {allLinks.map(link => <SingleLink className="menu-text " key={link.id} link={link} />)}
            </div>
        );
    }
}

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList);
