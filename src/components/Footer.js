import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fixed-bottom bg-dark text-white">
        <div className="container">
          © {this.props.projectName} {this.props.year}
        </div>
      </div>
    )
  }
}

export default Footer;
