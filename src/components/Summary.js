import React from 'react';
import Header from './Header';
import '../App.css';

export default class Summary extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="body_text">

          <h1>Summary</h1>

          <p>In this tutorial, you learned how to build a fully-feature Hackernews
            clone with React and Apollo Client. You implemented several features,
            such as displaying a list of links, signup and authentication,
            creating new links, voting on links, pagination as well as realtime
            updates with GraphQL subscriptions.</p>

          <p>Apollo is a flexible GraphQL client that can be used on all major
            development platforms. It has an intuitive API and implements handy
            features like caching, optimistic UI and subscriptions that let you
            focus on the important parts of your app.</p>

        </div>

      </div>


    );
  }
}
