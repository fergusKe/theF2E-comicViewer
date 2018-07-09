import React, { Component } from 'react';

import ComicItem from '../../components/ComicItem/ComicItem';

class Home extends Component {
  render() {
    return (
      <div id="app">
        <ComicItem />
      </div>
    );
  }
}

export default Home;
