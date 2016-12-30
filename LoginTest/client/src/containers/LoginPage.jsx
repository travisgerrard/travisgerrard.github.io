import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {

  /**
    * Class constructor
    */
  constructor(props) {
    super(props);

    // set initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
    * Change the user object.
    *
    * @param {object} event - the JavaScript event object
    */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    console.log(event);
    console.log(event.target);

    this.setState({
      user
    });
  }

  /**
    * Process the form.
    *
    * @param {object} event - the JavaScript event object
    */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }

  /**
    * Render the component.
    */
    render() {
      return (
        <LoginForm onSubmit={this.processForm} onChange={this.changeUser} errors={this.state.errors} user={this.state.user} />
      );
    }
}

export default LoginPage;
