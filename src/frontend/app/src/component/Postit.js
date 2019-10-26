import React from 'react';


class Postit extends React.Component {
  render(props, state){
      return (
          <div className = 'postit'>
              <div>{this.props.data.user}</div>
              <div>{this.props.data.text}</div>
          </div>
      )
  }
}

export default Postit;
