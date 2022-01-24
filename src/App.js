import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  addItem() {
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="todo-page">
        <div>
          <h1>To-Do List</h1>
          <br/>
          
          <div className="Input">
          <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <label for="input" className="Input-label"></label>
          </div>
          <button className="add-task" onClick={() => this.addItem()}>Add</button>


          <br />
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button className="delete-task" onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
