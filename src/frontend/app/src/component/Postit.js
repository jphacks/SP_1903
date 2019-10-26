import React from 'react';


class Board extends React.Component {
  render(props, state){
      return (
          <div>
              <div>{this.props.data.user}</div>
              <div>{this.props.data.text}</div>
          </div>
      )
  }
}

export default Board;
