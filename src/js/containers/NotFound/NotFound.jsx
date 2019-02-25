import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    document.getElementById('body').className = ''
  }

  render() {
    const { match, location } = this.props;
    // debugger;
    return (
      <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 style={{ fontSize: '15vw' }}>404</h1>
        <label>
          No match for <code>{location.state.lastPath ? location.state.lastPath : location.pathname}</code>
        </label>
      </div>
    );
  }

}

export default NotFound;