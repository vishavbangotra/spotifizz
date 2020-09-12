import React, { Component } from 'react'



// This is just an api fetch test

class FetchProducts extends Component{
  state = {
    loading: true,
    person: null
  };
  async componentDidMount(){
    const url = "https://randomuser.me/api"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person:data.results[0], loading:false});
  }
  render(){
    return(
      <div>
        {
          this.state.loading ? <div>Loading...</div>:
          <div>{this.state.person.name.first}</div>
        }
      </div>
    );
  }
}
export default FetchProducts;
