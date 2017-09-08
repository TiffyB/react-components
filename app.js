// TODO
// var onListItemClick = (event) => {
//   console.log('clicked!');
// }

// var GroceryListItem = (props) => (
//   <ul>
//     <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <ul>Grocery List
//     <GroceryListItem groceryItems={['Coffee', 'Tea']}/>
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById('app'));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      // <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
      <li style={style} onMouseEnter={this.onListItemClick.bind(this)} onMouseLeave={this.onListItemClick.bind(this)}>{this.props.item}</li>

    )
  }
}

var GroceryList = (props) => {
  return (
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );

};
ReactDOM.render(<GroceryList items={["coffee", "tea"]}/>, document.getElementById('app'));


// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );
// var props = {
//   todos: ["walk", "run", "swim"]
// };

// var element = TodoList(props);
// ReactDOM.render(element, document.getElementById('app'));


// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.groceryItems = props.groceryItems;
//   }

//   render() {
//     return (
//       <li>{this.props.groceryItem}</li>
//     );
//   }
// }


// var GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map(groceryItem =>
//       <GroceryListItem groceryItem={groceryItem} />
//     )}
//   </ul>
// );

// var props = {
//   groceryItems: ['coffee', 'tea']
// }

// var list = new GroceryListItem(props);

// list.render();
// console.log(list.render());
// // ReactDOM.render(new GroceryListItem(obj), document.getElementById('app'));

// ReactDOM.render(list.render(), document.getElementById('app'));

