import React from 'react'
import Faqs from '../components/Home/Faqs'
import GlassMorphism from '../components/Home/GlassMorphism'
import FirstIm from '../components/Home/FirstIm'
import Sender from '../components/Home/Sender'
import Info from '../components/Home/Info'

function Home({setSnackBar,setDistance,setColor,setMessage,setDuration,setFilteredData,filteredData,fromRef,toRef,setDirectionResponse}) {
  return (
    <div>
    <FirstIm/>
    <Sender setSnackBar={setSnackBar} setColor={setColor} filteredData={filteredData}
    setMessage={setMessage} setFilteredData={setFilteredData}
    fromRef={fromRef} toRef={toRef}  setDirectionResponse={setDirectionResponse}
    setDistance={setDistance} setDuration={setDuration}/>
    <Info/>
    <GlassMorphism/>
    <Faqs/>
    </div>
  )
}

export default Home