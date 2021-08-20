import React,{ useState } from 'react'
import st from './Message.module.css'
import {contDate}from'./HW1'
let ms=''
function Message(props:contDate) {
    const [name, setName] = useState('');
    console.log(setName)

    function handleInput(event:any) {
        setName(event.target.value)
    }

    // const handleInput = event => {
    //   setName(event.target.value);
    // };
  
    const logValue = () => {
      
      ms=name
      console.log(ms+'   ms')
    
    };
        if(ms!=props.message){
         return(
            <div className={st.message}>
            <div className={st.wrap_img}>
                <img src={props.avatar} alt="ava" />
            </div>
            <ul className={st.message_list}>
                <li className={st.message_item__name}>
                    {props.name}
                </li>
                <li className={st.npm}>
                    {props.message}
                </li>
                <li className={st.message_item__date}>
                    {props.time}
                </li>
            </ul>
            <div className={st.wrap_img}>
                <img src={props.avatar} alt="ava" />
            </div>
            <ul className={st.message_list}>
                <li className={st.message_item__name}>
                    {props.name}
                </li>
                <li className={st.npm}>
                    {ms}
                </li>
                <li className={st.message_item__date}>
                    {props.time}
                </li>
            </ul>
            <input  onChange={handleInput} placeholder="Enter name"/>
            <button onClick={logValue}>Log value</button>
        </div>
         )}
    return (
        <div className={st.message}>
            <div className={st.wrap_img}>
                <img src={props.avatar} alt="ava" />
            </div>
            <ul className={st.message_list}>
                <li className={st.message_item__name}>
                    {props.name}
                </li>
                <li className={st.npm}>
                    {props.message}
                </li>
                <li className={st.message_item__date}>
                    {props.time}
                </li>
            </ul>
            <input  onChange={handleInput} placeholder="Enter name"/>
            <button onClick={logValue}>Log value</button>
        </div>
    )
}

export default Message
