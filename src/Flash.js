import React from "react";
import { Button, Segment, Icon } from "semantic-ui-react";


class Flash extends React.Component {
  state = { frontShown: true, }

  toggleFlash = () => this.setState({ frontShown: !this.state.frontShown });

  render() {

    const { id, question, answer, remove } = this.props
    const { frontShown } = this.state
      return (
        <Segment.Group horizontal>
          <Segment>Question:<strong> {question}</strong></Segment>
          <Segment>Answer: <strong>{ frontShown ? [<br />]: answer  }</strong></Segment>
          <Button color="green" onClick={() =>this.toggleFlash()} ><a><Icon color = "yellow" size = "large"
        name = {frontShown ? "eye" : "eye slash" }/></a></Button>
          <Segment>
            <Button color="red" onClick={() => remove(id)}>
              Delete
            </Button>
          </Segment>
        </Segment.Group>
      );
    }
  } 


export default Flash;