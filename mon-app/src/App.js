import { Component } from 'react';
import './App.css';
import myImage from './reactimg.png';


class App extends Component {
   state = {
    person : {
       fullname : "Elyes Ammar",
       bio : "Web developer",
       image: myImage,
       profession : "React Developer"
    },
    show: false,

    imgstyle :{
      height:"300px",
      width:"300px",
  }

   }

  
   toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  renderProfile = () => {
    const { fullname, bio, image, profession } = this.state.person;
    if (this.state.show) {
      return (
        <div>
          <img style={this.state.imgstyle} src={image} alt={fullname} />
          <h1>{fullname}</h1>
          <h2>{profession}</h2>
          <p>{bio}</p>
        </div>
      );
    }
  };

 
  render (){
  return (
    <div className='app'>
      <div className="App">
      
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.renderProfile()}
        
      </div>
     </div>
  );
}
}
export default App;
