import React from "react";
import { Button, Segment } from "semantic-ui-react";


const Flash = ({ id, question, answer, remove }) => {
  return (<Segment.Group horizontal>
    <Segment>{question}</Segment>
    <Segment>{answer}</Segment>
    <Segment>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
    </Segment>
  </Segment.Group>);
}

export default Flash;