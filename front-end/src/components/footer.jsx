import React, { Component } from 'react';

class Footer extends Component{
  render() {
    return (
      <div className="footer">
        <p>{this.props.message}</p>
        <p className="mt-5 mb-3 text-muted">&copy; {this.props.year} </p>
      </div>
    );
  }
}

export default Footer;
