import React from 'react';
import Postit from './Postit';
import './app.css';

class Board extends React.Component {
　
　constructor(){
    super();
    this.state = {
        allposts : [
            {
                "user" : "user_a",
                "text" : "text"
            },
            {
                "user" : "user_a",
                "text" : "text"
            },
            {
                "user" : "user_a",
                "text" : "text"
            },
        ],
        myposts : [
            {
                "text" : "text",
            },
            {
                "text" : "text",
            },
            {
                "text" : "text",
            }
        ],
    }
  }

  componentDidMount(){
    const url = "http://localhost:3000";
    /*
    fetch(url).then(res => {
        this.setState({posts : res})
    })
    */
  }
　　
  render(props, state){
      return (
          <div>
              <div className = "board">
                {this.state.allposts.map((post) => {
                    return (
                        <Postit data = {post} />
                    )
                })}
              </div>

              <div className = "postit_area">
                  {this.state.myposts.map((post) => {
                      return (
                         <div className = "mypostit">
                            <button className = 'send'>send</button>
                            <Postit data = {post} />
                         </div>
                         
                      )
                  })}
              </div>
          </div>
      )
  }
}

export default Board;
