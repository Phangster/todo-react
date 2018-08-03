class List extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind( this );
    this.submitHandler = this.submitHandler.bind( this );
    // this.removeItem = this.removeItem.bind( this ); //already binded when doing onCLick = {event => this.handleRemove(id)}

  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word: event.target.value});
    console.log("change", event.target.value);
    
  }
  submitHandler(event){
    const newList = this.state.list.slice(); 
    newList.push(this.state.word);
    this.setState({word: '', list: newList});
    event.preventDefault();
  }

  removeItem(event){
    var currentList = this.state.list;
    currentList.splice(event, 1);
    this.setState( { list : currentList } );
  }

  editItem(id){
    console.log(id)
    var currentList = this.state.list;
    currentList.splice(id, 1);
    this.setState( { list : currentList } );
  }

  render() {
    // render the list with a map() here
    let tasks = this.state.list.map((message, id) => {
      return(<div className='box'><li key={id}>{message}
        <button class='btn-warning' onClick={event => this.removeItem(id)}>Delete</button>
        <button class='btn-success' onClick={event => this.editItem(id)}>Edit</button>

      </li></div>)
    });
    console.log(tasks);
    console.log(this.state.list)
    console.log("rendering");
      
    return (
      <div>
        <div className="list">
          <h1>TO DO LIST</h1><br />
          <textarea onChange={this.changeHandler} value={this.state.word}/><br />
          <button onClick={this.submitHandler}>add note</button>
        </div>
        <ul>
          {tasks}
        </ul>   
      </div>
    );
  }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);

