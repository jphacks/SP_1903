import React from 'react';
import Postit from './Postit';
import './app.css';
import axios from 'axios';

class Board extends React.Component {
　
　constructor(){
    super();
    this.state = {
        postsbypaper : {},
        allposts : [],
        papers : {},
        myposts : {
            0 : {
                "paper_id":1,
                "text" : "text",
            },
            1 : {
                "paper_id":1,
                "text" : "text",
            },
            2 : {
                "paper_id":1,
                "text" : "text",
            }
        },
        count : 3,
    }
  }

  componentDidMount(){
    const poster_url = "http://localhost:3333/papers/show"
    axios(poster_url).then((res) => {
        let data = res.data["data"];
        this.setState({
            papers: data
        })
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
            if(postbypaper[element["paper_id"]] === undefined) return ;
            postbypaper[element['paper_id']].push(element)
        })
        this.setState({
            postsbypaper: postbypaper
        })

        console.log(this.state.postsbypaper)

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
    const paper_id = this.state.myposts[id].paper_id;

    const send_data = {
        'paper_id': parseInt(paper_id),
        'text': msg,
        'user_id': 1,
    }

    const url = "http://localhost:3333/postits/create"

    axios.post(url, send_data).then((res) => {
        let clone = {}
        Object.assign(clone , this.state.myposts);
        delete clone[id]
        this.setState({
            myposts: clone
        })

        let postsclone = {}
        Object.assign(postsclone, this.state.postsbypaper);
        // get inserted data from res and push to postsbypaper;
        console.log(postsclone);
        postsclone[paper_id].push(res.data['data'])
        this.setState({
            postsbypaper: postsclone
        })

    })
    
  }

  change = (e) => {
     const msg = e.target.value;
     const id = e.target.id
     let clone = {}
     Object.assign(clone , this.state.myposts);
     clone[id] = {
         "paper_id": clone[id]['paper_id'],
         "text":msg
     };

     this.setState({
         myposts: clone
     })
  }

  change_paper = (e) => {
     const paper_id = e.target.value;
     const id = e.target.id
     
     let clone = {}
     Object.assign(clone, this.state.myposts);
     clone[id] = {
        "paper_id": paper_id,
        "text": clone[id]['text']
     }

     this.setState({
         myposts:clone
     })
     
  }
　　
  render(props, state){
      return (
          <div>
              <div className = "board">
                    {Object.keys(this.state.postsbypaper).map(val => {
                        if(val === undefined) return;
                        if(this.state.papers[val] === undefined) return ;

                        return (
                            <div className = "paper">

                                <div className = "title">PaperID:{val}, {this.state.papers[val].name}</div>
                                {this.state.postsbypaper[val].map(data => {
                                    return (
                                        <Postit data = {data} />
                                    )
                                })}
                            </div>
                        )
                    })}
              </div>

              <div className = "postit_area">
                  {Object.keys(this.state.myposts).map((key) => {
                      return (
                         <div className = "mypostit">
                            <div>
                                <span className = 'paperidtext'>Paper ID : </span>
                                <input id = {key} type = 'text' onChange = {this.change_paper} placeholder = 'paper_id' value = {this.state.myposts[key].paper_id} className = 'paper_id_textarea'></input>
                            </div>
                            <button id = {key} className = 'send' onClick = {this.send}>Prot</button>
                            <textarea id = {key} className = 'textarea' value = {this.state.myposts[key].text} onChange = {this.change}></textarea> 
                         </div>
                         
                      )
                  })}
                  <div>
                      <button className = 'add_post' onClick = {this.add_post}>+</button>
                  </div>
              </div>
          </div>
      )
  }
}

export default Board;
