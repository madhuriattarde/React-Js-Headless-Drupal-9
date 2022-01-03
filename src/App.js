import logo from './logo.svg';
import React from 'react';
import './App.css';
import Articles from "./Components/Article/Articles";

import events from 'events';
import ajax from './ajax';

// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      nodes: []
    }
    this.refresh = this.refresh.bind(this)
  }

  componentWillMount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  componentWillUnmount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  async componentDidMount() {
    await this.refresh()
  }

  async refresh() {
    // AJAX fetch server/node/rest?_format=json and setState with the response data
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.get('/api/articles') // wait for the POST AJAX request to complete
      if (response.data) {
        // setState will trigger repaint
        this.setState({ nodes: response.data });
        
      }
      } catch (e) {
      alert(e)
    }
  }
  

  render() {
    return (
      <div className="App">
        <Articles
          data={this.state.nodes}
        />
      </div>
    );
  }
}

export default App;
