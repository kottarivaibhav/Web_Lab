import React, { Component } from 'react';
import JokeList from './Jokelist'; // Adjust the path as per your project structure

class App extends Component {
  render() {
    // The array of joke objects to display
    const jokes = [
      { setup: 'Why don’t scientists trust atoms?', punchline: 'Because they make up everything!' },
      { setup: 'What do you get if you cross a cat with a dark horse?', punchline: 'Kitty Perry' },
      { setup: 'Why don’t some couples go to the gym?', punchline: 'Because some relationships don’t work out.' },
      { setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field!' },
      { setup: 'Why don’t skeletons fight each other?', punchline: 'They don’t have the guts.' }
    ];

    return (
      <div>
        <h1>Joke List</h1>
        <JokeList jokes={jokes} />
      </div>
    );
  }
}

export default App;
