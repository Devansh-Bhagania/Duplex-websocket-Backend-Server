"use client"
import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'
const socket = io('http://localhost:9000')

function Homepage() {
    const [socketid, setSocketid] = useState('');
    const [message, setMessage] = useState('hello');
    const [chat, setChat] = useState([]);
    useEffect(() => {

      socket.emit('client-ready')
  
    
      socket.on("message", (m) => {
        setChat((prevMessages) => [...prevMessages, m]);
        console.log(m)
        // data.push(m);
      });
      
      
  
     
      
    
    }, [socket]);

    
      
        
         
        
   

      

    
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    
    function handleinput(e){
      setMessage(e.target.value);
      console.log(e.target.value);
    }
      
      function messagee() {
        socket.emit("message", `${message}, ${socket.id}`);
        
      }
   
      
    return (
      <div>
        
        <p>Socket ID: { socketid }</p>
          <input onChange={handleinput}type="text" className='border-2 border-neutral-300 m-3' />
        <button onClick={messagee}>send MEssage</button>
        {/* <button onClick={socketo}>disconnect</button> */}
        {chat.map((m, i) => (
          <p key={i}>{m}</p>
        
        ))}

        
        
      </div>
    );
}

export default Homepage