import React from 'react'
import Nav from './Nav'
import PropsSample from './propsSample'
import MyApi from './MyApi'
import Counter from './Counter'
export default function Home() {
  return (
<>
<Nav/>
<MyApi/>
<Counter/>
<h1>Home</h1>
<PropsSample/>
</>  
)
}