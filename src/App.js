import React, { Component } from 'react';
import './App.css';
import { Container, Header, Segment, Button, Icon } from "semantic-ui-react"; 
import Flashes from './Flashes'
import FlashForm from './FlashForm'

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
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Flash Cards</Header>
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name='angle double down' />
          </Button>
          {/* { this.state.showForm ? <FlashForm add={this.flash.answer} /> : null } */}
        </Segment>
        <Flashes flashes={this.state.flashes} remove={this.removeFlash} />
        <br />
        <FlashForm add={this.addFlash} />
      </Container>
    );
  }
}

export default App;
