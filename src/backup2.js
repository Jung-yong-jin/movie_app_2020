import React from 'react';

class App extends React.Component{

 
 
  state = {
    count: 0,
  }

  add = () => {
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({count : current.count + 1}));
  }

  minus = () => {
    //this.setState({count: this.state.count -1});
    this.setState(current => ({count : current.count - 1}));
  }

  constructor(props){
    super(props);
    console.log('hello');
  }

  render(){
    console.log('I\'m rendering');
    return (
            <div>
              <h1>The number is: {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
            </div>
            );
  }

  //컴포넌트가 처음 화면에 그려지면 실행되는 함수
  componentDidMount(){
    console.log('component rendered');
  }

  //컴포넌트가 업데이트 될때 실행
  componentDidUpdate(){
    console.log('I just updated');
  }

  //컴포넌트가 사라질때 실행
  componentWillUnmount(){
    console.log('this is close');
  }

}

export default App;
