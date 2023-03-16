import Layout from "./components/ui/Layout";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from '../src/components/Auth/Login'
import SignUp from '../src/components/Auth/SignUp'
import Receiver from "./components/Home/Receiver";
import { useState,useRef } from "react";
function App() {
  const [snackBar,setSnackBar] =useState(false)
  const [message,setMessage] =useState('')
  const [color,setColor] =useState('')
  const [directionResponse,setDirectionResponse]=useState(null)
  const [distance,setDistance]=useState('')
  const [duration,setDuration]=useState('')
  const [filteredData,setFilteredData] =useState('')
    /**@type React.MutableRefObject<HTMLInputElement> */
  const fromRef=useRef()
    /**@type React.MutableRefObject<HTMLInputElement> */
  const toRef=useRef()
  return (
    <Router>
      
    <Layout snackBar={snackBar} color={color} message={message} setSnackBar={setSnackBar}>
      <Routes>
        <Route exact path='/' element={<Home setSnackBar={setSnackBar} setColor={setColor} setMessage={setMessage}
        setFilteredData={setFilteredData} filteredData={filteredData} fromRef={fromRef} toRef={toRef}
        setDirectionResponse={setDirectionResponse}
        setDistance={setDistance} setDuration={setDuration}
/>}/>
        <Route exact path='/Contact' element={<Contact setSnackBar={setSnackBar} setColor={setColor} setMessage={setMessage}/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>
        <Route exact path='/Receiver' element={<Receiver filteredData={filteredData}
        directionResponse={directionResponse} duration={duration} distance={distance}
        fromRef={fromRef} toRef={toRef}        
        />}/>
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;

// 