import React, { PropTypes } from 'react';
import PatientDynamicInputBox from '../components/PatientDynamicInputBox.jsx';
import Crypto from '../modules/Crypto';

require('../sass/PatientFollowUps.scss');

class PatientFollowUpInputPage extends React.Component {

  /**
    * Class constructor
    */
    // Sets initial state
    constructor(props) {
      super(props);

      this.state = {
        inputBoxClassName: "AddFollowUp"
      }

      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
      if (e.key === 'Enter') {
        this.props.onUpdate(e.target, this.props.patientData._id);
        e.currentTarget.value = ""
      }
    }

    render() {
      return (
        <div>
          <label>Follow Ups</label>
          <br />
          <PatientDynamicInputBox handleKeyPress={this.handleKeyPress} inputBoxClassName={this.state.inputBoxClassName} />
        </div>
      )
    }
}

export default PatientFollowUpInputPage;