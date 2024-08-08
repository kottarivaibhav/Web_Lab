import React, { Component } from 'react';
import Joke from './Joke'; // Importing the Joke component

// JokeList component renders a list of Joke components
class JokeList extends Component {
  render() {
    // Destructuring the jokes prop to access the jokes array
    const { jokes } = this.props.jokes;

    return (
      <div>
        {/* Mapping over the jokes array and rendering each Joke component */}
        {jokes.map((jokes, index) => (
          // Passing each joke object to the Joke component as a prop
          <Joke key={index} joke={jokes} />
        ))}
      </div>
    );
  }
}

export default JokeList;
