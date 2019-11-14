import React from 'react'
import Map from '../components/Maps.jsx'

//We decided to pass our props into our container levels because we wanted to onboard passing our hooks
//despite there not being an actual reason to do so

const MapsContainer = (props) => {
    return (
        <div id="map" location={location}>
          <Map location={location}/>
          <script>{console.log(props.location)}</script>
        </div>
        
      );
}
 
export default MapsContainer;