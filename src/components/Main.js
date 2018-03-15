import React from 'react';
import Header from './Header';
import '../App.css';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="body_text">
          <h1>React + Apollo Tutorial - Introduction</h1>

          <h5>Overview</h5>

          <p>In the previous tutorials, you learned about major concepts and
            benefits of GraphQL. Now is the time to get your hands dirty and
            start out with an actual project!
          </p>

          <p>You’re going to build a simple clone of Hackernews.
            Here’s a list of the features the app will have:</p>

          <ul>
            <li>Display a list of links</li>
            <li>Search the list of links</li>
            <li>Users can authenticate</li>
            <li>Authenticated users can create new links</li>
            <li>Authenticated users can upvote links (one vote per link and user)</li>
            <li>Realtime updates when other users upvote a link or create a new one</li>
          </ul>

          <p>etc ... etc .... etc ....</p>

        </div>

      </div>


    );
  }
}
