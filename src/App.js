import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core'

import Header from './Components/Header'
import Slider from './Components/Slider'
import AboutMe from './Components/AboutMe'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <Container fluid="true">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-0 col-xs-0">
            <Header />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12" style={{ margin: "0px", padding: "0px" }} >
            <Slider />
            <AboutMe />
            <Services />
            <Skills />
            <Education />
            <Experience />
            <Footer />
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
