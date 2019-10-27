import React from 'react';
import Postit from './Postit';
import './app.css';
import axios from 'axios';

class Board extends React.Component {
　
　constructor(){
    super();
    this.state = {
        paper : [],
        allposts : [],
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
        postsbypaper: {},
    }
  }

  componentDidMount(){

    const poster_url = "http://localhost:3333/papers/show"
    axios(poster_url).then((res) => {
        let data = res.data["data"];
        let postbypaper = {}
        data.forEach(element => {
            postbypaper[element["id"]] = []
        });

        this.setState({
            postsbypaper: postbypaper
        })

        const postit_url = "http://localhost:3333/postits/show"
        return axios(postit_url)
        
    }).then((res) => {

        let data = res.data["data"];
        
        let postbypaper = JSON.parse(JSON.stringify(this.state.postsbypaper))

        data.forEach(element => {
            if(element["paper_id"] === null) return ;
            postbypaper[element['paper_id']].push(element)
        })
        this.setState({
            postsbypaper: postbypaper
        })

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

    const url = "http://localhost:3333/postits/create"
    axios.post(url, {
        user_id: 1,
        text: msg
    })

    let clone = {}
    Object.assign(clone , this.state.myposts);
    delete clone[id]
     this.setState({
         myposts: clone
     })

     let cloneposts = []
     Object.assign(cloneposts, this.state.allposts);
     cloneposts.push({
        "user_id" : 1,
        "text" : msg
     })
     this.setState({
         allposts: cloneposts
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
