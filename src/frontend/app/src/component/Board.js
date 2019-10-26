import React from 'react';
import Postit from './Postit';
import './app.css';
import axios from 'axios';

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
        myposts : {
            0 : {
                "text" : "text",
            },
            1 : {
                "text" : "text",
            },
            2 : {
                "text" : "text",
            }
        },
        count : 3,
    }
  }

  componentDidMount(){
    const url = "http://localhost:3333/postits/show"
    axios(url).then((res) => {
        let data = res.data["data"];
        console.log(data)
        this.setState({allposts:data})

    })

  }

  add_post = (e) => {
    let clone = {}
    Object.assign(clone , this.state.myposts);
    clone[this.state.count] = {
        "text":"text"
    }
    this.setState({count : this.state.count + 1})
     this.setState({
         myposts: clone
     })
  }
   
  send = (e) => {
    const id = e.target.id;
    const msg = this.state.myposts[id].text;
    console.log(id, msg)
    let clone = {}
    Object.assign(clone , this.state.myposts);
    delete clone[id]
     this.setState({
         myposts: clone
     })
  }

  change = (e) => {
     const msg = e.target.value;
     const id = e.target.id
     let clone = {}
     Object.assign(clone , this.state.myposts);
     clone[id] = {
         "text":msg
     };
     this.setState({
         myposts: clone
     })
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
                  {Object.keys(this.state.myposts).map((key) => {
                      return (
                         <div className = "mypostit">
                            <button id = {key} className = 'send' onClick = {this.send}>send</button>
                            <textarea id = {key} className = 'textarea' value = {this.state.myposts[key].text} onChange = {this.change}></textarea> 
                         </div>
                         
                      )
                  })}
                  <div>
                      <button className = 'add_post' onClick = {this.add_post}>ADD</button>
                  </div>
              </div>
          </div>
      )
  }
}

export default Board;
