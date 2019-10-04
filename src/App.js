import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = ({
    persons: [
      {id: 'asdf1', name: 'Max', age: 10},
      {id: 'asdf2', name: 'Manu', age: 29},
      {id: 'asdf3', name: 'Faruk', age: 30},
    ],otherState: 'some other value',
    showPersons: false
  });

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  } 


  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
 
  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '3px',
      transition: 'all .3s',
      
    }
    let persons = null;
    if(this.state.showPersons){
          persons = (
            <div>
              {this.state.persons.map((person, index) => {
                  return  <Person 
                  click = { () => this.deletePersonHandler(index) }
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
              })}
           </div>
      );
      style.backgroundColor = 'red';
      style.color = 'white';     
    }

    const classes = []
    if(this.state.persons.length <= 2){
       classes.push('red') // classes = ['red']
    }
     if(this.state.persons.length <= 1){
      classes.push('bold') // classes = ['bold']
    }
    // const strings = 'my name is faruk hosssain';
    // console.log(strings.split(' '))




      return ( 
       
          <div className="App">
            <h1>Hi i am a Ract App</h1> 
            <p className={classes.join(' ')}>This is really working</p>
            <button
              style={ style }
               onClick={ this.togglePersonHandler }>Toggle Persons</button>
            {persons}
          </div>
      
    );
}
}
 
export default App;



/*********
state = {
  persons: [
    {name: 'Max', age: 10},
    {name: 'Manu', age: 29},
    {name: 'Faruk', age: 30},
  ],otherState: 'some other value'
}

switchNameHandler = () => {
  this.setState({
    persons: [
      {name: 'Maxmilian', age: 40},
      {name: 'Manu', age: 29},
      {name: 'Faruk', age: 27}
    ]
  })
  // this.state.persons[0].name = 'Maximilian'
}

 **********/