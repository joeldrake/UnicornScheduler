import React from 'react';
import Head from './Head';
import './../css/main.css';

class Layout extends React.Component {
  render() {
    return (
      <div className={`main`}>
        <Head />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
