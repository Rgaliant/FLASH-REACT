import React from "react";
import { Button, Container, Segment } from "semantic-ui-react";
import Flash from './Flash'



const Flashes = ({ flashes, remove }) => (

  <Container text>
  <Segment>
  <Segment.Group horizontal>
    <Segment>Question</Segment>
    <Segment>Answer</Segment>
    <Segment>
     Options
    </Segment>
  </Segment.Group>
   <div>
    {
      flashes.map( flash => (
        <Flash key={flash.id} {...flash} remove = {remove} />
      ))
    }
    </div>
    </Segment>
  </Container>
);

export default Flashes;