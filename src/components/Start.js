import React from 'react';
import Header from './Header';
import '../App.css';

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="body_text">

          <h1>Getting Started</h1>

          <p>Since this is a frontend track, you’re not going to spend any time
            implementing the backend. Instead, you’ll use the server from the Node tutorial.</p>

          <p>Once you created your React application, you’ll pull in the required
              code for the backend.</p>

          <p><strong>Note:</strong> The final project for this tutorial can
              be found on GitHub. You can always use it as a reference whenever
              you get lost throughout the course of the following chapters.
              Also note that each code block is annotated with a filename.
              These annonations directly link to the correpsonding file on GitHub
               so you can clearly see where to put the code and what the end result
                will look like.</p>

          <p>etc ... etc .... etc ....</p>

        </div>

      </div>


    );
  }
}
