import React, { Component } from 'react'

class Logincheck extends Component {

  constructor(props)
    {
       super(props);
       this.state = {
          post: []
       }
    }


  componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=> res.json())
      .then(data=> this.setState({post:data}));
  }

  render() {
    const postItems = this.state.post.map(post => (
      <div key={post.id}>
      <h3> {post.title} </h3>
      <p> {post.body} </p>
      </div> 
    ));
    return (
      <div>
        <h1>Hello!</h1>
        {postItems}
      </div>
    )
  }
}

export default Logincheck

