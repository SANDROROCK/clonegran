import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Photo from './components/Photo';

function App() {
 
  const imageData = {
    src: "https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af394daae4bdbc4a95dc2204984b790d&auto=format&fit=crop&w=800&q=60",
    user: {
      name: "Alessandro Rocha",
      profile_image: "https://avatars3.githubusercontent.com/u/16439783?s=40&v=4",
      link: "https://www.linkedin.com/in/alessandro-de-sousa-rocha-743b14a4/"
    }
  }

  
  return (
    <div className="App">
      <Photo {...imageData} />
    </div>
  );
}


export default App;

