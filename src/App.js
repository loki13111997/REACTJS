import React, { Component } from 'react'
import Banner from './Banner'
import Header from './Header'
const arr =[1,2,3,4,5,6,7,89,76544,0]
export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {arr.map(i=>{
          return <Banner/>
        })}
        

      </div>
    )
  }
}

export default App
