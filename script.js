class List extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind( this );
    this.submitHandler = this.submitHandler.bind( this );
    // this.removeItem = this.removeItem.bind( this ); //already binded when doing onCLick = {event => this.handleRemove(id)}

  }

  state = {
    list : [],
    word : "",
    doneList : []
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

  removeItem(id){
    console.log(id)
    var currentList = this.state.list;
    currentList.splice(id, 1);
    this.setState( { list : currentList } );
  }

  render(){
    // render the list with a map() here
    let tasks = this.state.list.map((message, id) => {
      return(<div className='box'><li key={id}>{message}
        <button class='btn-warning' onClick={event => this.removeItem(id)}>Delete</button>
        <button class='btn-success' onClick={event => this.doneItem(id)}>Done</button>
        
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
        <div className="list">
          <h1>DONE</h1><br />
          <ul>
            <Done/>
          </ul>
        </div>
      </div>
    );
  }
}
class Done extends React.Component {

  constructor(props){
    super(props)
      this.doneItem = this.doneItem.bind( this );
  }

  state = {
    list : [],
    doneList : []
  }

  doneItem(id){
    console.log(id)
    var doneList = this.state.doneList;
    var nowList = this.state.list;
    doneList.push(nowList[id]);
    nowList.splice(id, 1);
    this.setState({ 
      list : nowList,
      doneList : doneList
    })
  }

  render(){
    let done = this.state.doneList.map((done, id)=>{
      return(<li key={id}>{done}
        <button class='btn-success' onClick={this.doneItem(id)}>Done</button>
      </li>)
    });

  return(
    <div> 
      <ul>
        {done}
      </ul>
    </div>
    )
  }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);

