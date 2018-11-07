import React from 'react';

import RenderCanvas from './RenderCanvas';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCanvas: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showCanvas: true });
  }

  render() {
    const { showCanvas } = this.state;

    return (
      <div>
        <div>This is home. hello world!</div>
        <button onClick={this.handleClick}>Enter</button>
        {showCanvas && <RenderCanvas />}
      </div>
    );
  }
}

export default Home;
