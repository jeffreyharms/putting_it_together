import './App.css';
import React from 'react';
import PropsComponent from './components/PropsComponent'
import StateComponent from './components/StateComponent';


function App() {
  return (
    <div className="App">
      <PropsComponent
      lastName = "Smith"
      firstName = "Robert"
      age = {63}
      hairColor = "Black"
      />
      <StateComponent propsAge = {63}/>
      <PropsComponent
      lastName = "MacKenzie"
      firstName = "Stu"
      age = {31}
      hairColor = "Brown"
      />
      <StateComponent propsAge = {31}/>
      <PropsComponent
      lastName = "Parker"
      firstName = "Kevin"
      age = {36}
      hairColor = "Brown"
      />
      <StateComponent propsAge = {36}/>
      <PropsComponent
      lastName = "Orzalek"
      firstName = "Karen"
      age = {43}
      hairColor = "Black"
      />
      <StateComponent propsAge = {43}/>
    </div>
  );
}

export default App;
