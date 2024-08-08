Program No:6 Create a custom component for rendering each
joke present in an array. Using the map function, map through
each object in the array. Use the custom component to render
each object.
 Here we are creating a class component as custom
component.
 Step 1: - create a class component ‘Joke.js’ which
receives receives an individual joke object as a prop and
renders its details.
1. Joke is a class component that renders details of an
individual joke.
2. It receives a joke object as a prop, which includes
setup and punchline attributes.
3. The component renders the joke&#39;s setup and
punchline inside styled div elements.

 Step 2: - create a class component ‘JokeList.js’ which
receives the list of jokes as a prop and maps over the
array, rendering a Joke component for each joke.
1. ‘JokeList’ is a class component that receives a list
of jokes as a prop.
2. It maps over the jokes array and renders a Joke
component for each joke object.
3. Each Joke component is provided a unique key prop
using the index and the joke object as a prop.

 Step 3: - rendering in parent component.
1. App is the main class component that contains the
array of joke objects.
2. It renders the JokeList component, passing the list
of jokes as a prop