# Blog App

A simple blog app built with React/Redux that leverages the herokuapp blog API.

***

[Installation](https://github.com/chris-malloy/blog#installation) | [Testing](https://github.com/chris-malloy/blog#testing) | [Challenges and Solutions](https://github.com/chris-malloy/blog#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/blog#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/blog#acknowledgements)

***

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest and assertion testing is done with Enzyme.

```sh
npm install --save-dev jest babel-jest babel-preset-env babel-preset-react react-test-renderer
```

```sh
npm i --save-dev enzyme enzyme-adapter-react-16
```

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

### Code Snippets

#### React-Router

This project provided good practice with react-router, and API that handles routing in a react app.  Here is how the code is wired up at the index level:

```javascript
  <BR>
    <Switch>
      <Route path="/posts/new" component={PostsNew} />
      <Route path="/posts/:id" component={PostsShow} /> 
      <Route path="/" component={PostsIndex} />
    </Switch>
  </BR>
```

The Route componets specify which components should be rendered, and the Switch component which handles collisions in path strings by specifiying which component is more important to render.  Finally the BR or BrowserRouter componet gets wrapped around all of the Route componets so that they have access to special objects like history and match.

#### Storing state as an object rather than an array

State was set up to be an object, which allowed for fast lookup of data without noisy code like looping if we used an array.

This allowed us to write some clever ES6 code which is clean and stable: 

```javascript
{ ...state, [action.payload.data.id]: action.payload.data };
```

What happens above is the a copy of the current state object is made, and then a new key: value pair is added to that object. This gets used when fetching a single post, and provides a nice, clear way to add on more posts to the state object.

### Acknowledgements

Stephen Grider, thank you for your course.  It was a great way to take my React knowledge to the next level.
