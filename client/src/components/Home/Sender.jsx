/* eslint-disable no-undef */
import React from "react";
import { useState } from "react";
import "./Sender.css";
import State from "./State";
import { useNavigate } from "react-router-dom";
import City from "./City";
// import country from "./country";
function Sender({setColor,setSnackBar,setMessage,setFilteredData,fromRef,toRef,setDistance,setDuration,setDirectionResponse}) {
  const [mode,setMode]=useState('reciever')
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [cityValue2, setCityValue2] = useState("");
  const navigate = useNavigate();

  const gotoReceiver = async()=>{
    if(mode==='deliver'){
        setSnackBar(true)
        setColor('green')
        setMessage('Your trip has been recorded ! If there is anyone who want to deliver anything ,We will contact You!')

    }else{
      var array=[]
      array.push(cityValue.toLowerCase().split(' ')[0])
      array.push(cityValue2.toLowerCase().split(' ')[0])
      setFilteredData(array)
      if(fromRef.current.value===''||toRef.current.value===''){
        return
      }
      const directionService=new google.maps.DirectionService();
      const result=await directionService.route({
        origin:fromRef,
        destination:toRef,
        travelMode:google.maps.TravelMode.DRIVING
      })
      setDirectionResponse(result)
      setDistance(result.routes[0].legs[0].distance.text)
      setDuration(result.routes[0].legs[0].duration.text)
      navigate("/Receiver");
    }
    setTimeout(() => {
      setSnackBar(false)
    }, 10000);
  }
  
  return (
    <>
      <p className=" text-[7px] md:text-[20px] font-bold mx-8 p-[24px] text-center">
        Start a Journey With US we are always happy to help you
      </p>

      <div className="Sender container mt-10 flex mx-auto items-center justify-center">
        <div className=" sm:ml-[400] md:ml-[520px]  flex flex-col bg-white p-8 rounded-xl md:w-1/4 text-lg relative my-auto">
          <div className='flex flex-row items-center  justify-around my-4'>
            <div className={`flex flex-col items-center cursor-pointer border-b-2 ${mode==='reciever'?'border-black':'border-white'}`} onClick={()=>setMode('reciever')}>
              <img src='https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg' alt='no img'/>
              <h2>Sender</h2>
              </div>
            <div className={`flex flex-col items-center cursor-pointer border-b-2 ${mode==='deliver'?'border-black':'border-white'}`} onClick={()=>setMode('deliver')}>
              <img src='https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg' alt='car'/>
              <h2>Deliver</h2>
              </div>
          </div>
      
      <div>
          <div className="mx-auto">
            <State value={stateValue} setValue={setStateValue}/>
          </div>
          </div>
          <div className="mx-auto"><City placeholder={'From' } stateValue={stateValue}
          value={cityValue} setValue={setCityValue}  Reference={fromRef}/></div> 
          <div className="mx-auto"><City placeholder={'To'} value={cityValue2} setValue={setCityValue2}
           Reference={toRef}
          stateValue={stateValue}/></div> 
          <button className="bg-black hover:bg-green-700 text-white my-2 py-3 px-3 mx-auto rounded-md font-bold w-[280px] "onClick={gotoReceiver}>
          {mode==='deliver'?'Ready to Deliver':'Sent a Request'}
          </button>
        </div>
      </div>
      
    </>
  );
}
export default Sender;
