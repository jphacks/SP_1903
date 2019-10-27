import React from 'react';


class Postit extends React.Component {
  render(props, state){
      return (
          <div className = 'postit'>
              <div className = 'useridtext'>UserID: {this.props.data.user_id}</div>
              <div>{this.props.data.text}</div>
          </div>
      )
  }
}

export default Postit;
