import React, { useState } from 'react'
import Message from './Message'
import st from './Message.module.css'

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
           

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>

            
        </div>
    )
}

export default HW1
