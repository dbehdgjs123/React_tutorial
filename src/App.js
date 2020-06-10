import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  id = 0;
  state = {
    imformation: [],
  };
  handleCreate = (data) => {
    const { imformation } = this.state;
    this.setState({
      imformation: imformation.concat({
        ...data,
        id: this.id++,
      }),
    });
  };
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.imformation)}
      </div>
    );
  }
}

export default App;
