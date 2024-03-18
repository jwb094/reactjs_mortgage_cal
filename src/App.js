import React,{Component} from 'react';

import './App.css';

class App extends Component {

  onClick = () => {
   alert(`yey: ${this.firstName.value} | ${this.lastName.value} submitted :)`)
  }

  onKeyPressed=  (target,e) => {
    console.log(target);
    console.log(e.KeyCode);
    // if(event.KeyCode === 13){
    //   switch(target){
    //     case 'firstname':
    //       this.lastName.focus();
    //       break;
    //     case 'lastname':
    //       this.age.focus();
    //       break;
    //     case 'age':
    //       this.submit.focus();
    //       break;
    //      default :
    //       this.firstName.focus();
    //       break;

    //   }
    // }
    //console.log(e.keyCode);
  }
  onKeyUp = (target,event) => {
    console.log(event.KeyCode);
    console.log(target);
    if(event.KeyCode === 13){
      switch(target){
        case 'firstname':
          this.lastName.focus();
          break;
        case 'lastname':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
         default :
          this.firstName.focus();
          break;

      }
    }
  }
  render(){

    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input 
          ref={(input)=>{this.firstName = input}} 
          onKeyUp={this.onKeyUp.bind(this,'firstName')}
          onKeyDown={this.onKeyPressed.bind(this,'firstName')}
          type="text"/>
        </div>
        <div>
          <span>Last Name:</span>
          <input ref={(input)=>{this.lastName = input}} 
          onKeyUp={this.onKeyUp.bind(this,'lastName')}
          type="text"/>
        </div>
        <div>
          <span>Age:</span>
          <input ref={(input)=>{this.age = input}} 
          onKeyUp={this.onKeyUp.bind(this,'age')}
          type="text"/>
        </div>
        <div>
          <input type="submit" value="Submit" 
          onKeyUp={this.onKeyUp.bind(this,'submit')}
          onClick={this.onClick} />
        </div>
      </div>
    );
  }
 
}

export default App;
