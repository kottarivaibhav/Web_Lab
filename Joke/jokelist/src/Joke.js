import React, { Component } from 'react';

// Joke component renders individual joke details
class Joke extends Component {
  render() {
    // Destructuring the joke prop to access the setup and punchline
    const { setup, punchline } = this.props.joke;

    return (
      <div style={{ padding: '10px', border: '1px solid black', margin: '5px' }}>
        {/* Displaying the joke setup and punchline */}
        <h2>{setup}</h2>
        <p>{punchline}</p>
      </div>
    );
  }
}

export default Joke;
