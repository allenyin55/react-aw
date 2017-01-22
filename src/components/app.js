import React, { Component } from 'react';
import { StickyContainer } from 'react-sticky';
import Headers from './header';
import Portfolio from './portfolio';
import NavBar from './navbar';
import Contact from './footer';

export default class App extends Component {
  render() {
    return (
      <StickyContainer>
        <Headers />
        <NavBar />
        <Portfolio />
        <Contact />
      </StickyContainer>
    );
  }
}
