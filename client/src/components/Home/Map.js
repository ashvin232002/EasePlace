import React,{ useState} from 'react'
import {useJsApiLoader,DirectionsRenderer ,GoogleMap,Marker} from '@react-google-maps/api'
function Map({lat,lng,direction,duration,directionResponse}) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "YOUR_API_KEY",
        libraries:['places'] 
      })
    const [map,setMap]=useState(/**@type google.maps.Map*/(null))
 
    

  return (
    <GoogleMap center={{lat:lat,lng:lng}} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}}
    onLoad={(map)=>setMap(map)}>
        <Marker position={{lat:lat,lng:lng}}/>
        {directionResponse&&<DirectionsRenderer directions={directionResponse}/>}
    </GoogleMap>
  )
}

export default Map