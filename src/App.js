import React from 'react'
import './App.css'
import ts from './Taylor Swift.jpg'

class App extends React.Component {
    constructor (){
      super()
      this.state = {
      
          fullName:'name',
          Bio:'bio',
          imgsrc:'img',
          profession:'profession',
          test:false
      
      
      }
    }
    clic=()=>{
      this.setState({test:(!this.state.test)});
      this.setState({fullName:'maram chaouch',bio:'she/her',imgsrc:ts,profession:'student'})
    }
    render(){

      return (
        <>
        <div className='page'>
          
        <div className='profil'  style={{display: this.state.test ? 'none'  : 'block'}}>
            <p>Photo</p>
                <p >Name</p>
                <p>Bio</p>
                <p>Profession</p>
        </div>
        <div className="profil"  style={{display: this.state.test ? 'block'  : 'none'}}>
        <img src={this.state.imgsrc} alt='' style={{width:'150px',height:'150px'}}></img>
          <h1>{this.state.fullName}</h1>
          <h1>{this.state.bio}</h1>
          <h1>{this.state.profession}</h1>
          <h1>{this.state.test}</h1>
          </div>
          <div  >
            <button className='btn' onClick={()=>this.clic()}>togggle profile</button>
        </div>
          </div>
          </>
          
          
          
          
          )
}}
export default App

