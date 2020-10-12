import React from 'react';

import { withAuthorization } from '../Session';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const userId = this.props.firebase.auth.currentUser.uid
    this.setState({userId})
    this.props.firebase.user(userId).on('value', snapshot => {
      let user = snapshot.val()
      this.setState({user})
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <h3>{this.state.user.username}</h3>
    <h3>:)</h3>
  </div>
    )
  }

}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
