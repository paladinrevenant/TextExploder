import React from "react";
import "./ValidationComponent.css";

class ValidationComponent extends React.PureComponent {
  render() {
    let validationText = "";
    let validationClasses = "ValidationComponent";

    if (this.props.textLength >= 5) {
      validationText = "Text long enough";
      validationClasses += " valid";
    } else {
      validationText = "Text too short";
    }

    return (
      <div className={validationClasses}>
        {validationText}
      </div>
    );
  }
}

export default ValidationComponent;
