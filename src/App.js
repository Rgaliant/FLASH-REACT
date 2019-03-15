import React, { Component, Fragment } from 'react';
import './App.css';
import { Container, Header, Segment, Button, Icon } from "semantic-ui-react"; 
import Flashes from './Flashes'
import FlashForm from './FlashForm'
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    flashes: [
      { id: 1, question: "What is React?", answer: "Front-end JavaScript Framework" },
      { id: 2, question: "What is Ruby?", answer: "Web-Development Framework" },
    ],
  }

  removeFlash = (id) => {
    const flashes = this.state.flashes.filter( flash => {
      if (flash.id !== id)
        return flash
    });
    this.setState({ flashes: [...flashes], });
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addFlash = (flashData) => {
    let flash = { id: this.getId(), ...flashData, };
    this.setState({ flashes: [flash, ...this.state.flashes], });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
        
         
        <Route exact path="/home" component={Home} />
      <Container style={{ paddingTop: "25px" }}>
      
        <Header as="h1" style={{ marginLeft: "45%" }}>Flash Cards</Header>
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm} style={{ marginLeft: "45%" }}>
            <Icon name='angle double down' />
          </Button>
          { this.state.showForm ? <FlashForm add={this.addFlash} style={{ marginLeft: "45%" }} /> : null }
          
        </Segment>
        <Flashes flashes={this.state.flashes} remove={this.removeFlash} />
        <br />
      </Container>
      </Switch>
      </Fragment>
    );
  }
}

export default App;
