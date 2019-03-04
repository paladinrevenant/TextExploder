import React from "react";
import "./CharComponent.css";

class CharComponent extends React.PureComponent {
  render() {
    return (
      <div className="CharComponent" onClick={this.props.clickHandler}>
        {this.props.char}
      </div>
    );
  }
}

export default CharComponent;
