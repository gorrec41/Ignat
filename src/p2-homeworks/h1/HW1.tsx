import React, { useState } from 'react'
import Message from './Message'
import st from './Message.module.css'
const ms=''
export type contDate={
    avatar:string,
    name:string,
    message:string,
    time:string
}
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    const [name, setName] = useState('');
    console.log(setName)

    function handleInput(event:any) {
        console.log( setName(event.target.value))
        setName(event.target.value);
        
    }

    // const handleInput = event => {
    //   setName(event.target.value);
    // };
  
    const logValue = () => {
      console.log(name);
      messageData.message=name
      console.log (messageData.message)

    };
  
    return (
        <div className={st.message_block}>
            <hr/>
            <h3 className={st.title}>homeworks 1</h3>

             <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />  
        
            {/* onChange={handleInput} */}
            <input  onChange={handleInput} placeholder="Enter name"/>
            <button onClick={logValue}>Log value</button>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>

            
        </div>
    )
}

export default HW1
