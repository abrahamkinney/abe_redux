import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>AM is a writer</h1>
      <p>links and stuff</p>
    <Link to="home" className="btn btn-primary btn-lg">Home</Link>
      </div>
    );
  }
}

export default AboutPage;
