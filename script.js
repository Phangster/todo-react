class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.submitHandler = this.submitHandler.bind( this );


  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
    
  }
  submitHandler(event){
    this.state.list.push(this.state.word);
    this.state.word="";
    this.setState({word:event.target.value})
    
  }

  render() {
      // render the list with a map() here
      console.log(this.state.list)
      console.log("rendering");
      return (
        <div className="list">
          <h1>TO DO LIST</h1><br />
          <textarea onChange={this.changeHandler} value={this.state.word}/><br />
          <button onClick={this.submitHandler}>add note</button>
            <ul class='pointer'>
            {this.state.list.map(function(message, index){
              return (
                <div>
                <li key={index}>{message}</li>
                </div>
              );
            })}
            </ul>   
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

