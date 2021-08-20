import React from 'react'
import st from './Message.module.css'
import {contDate}from'./HW1'

function Message(props:contDate) {
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
        
        </div>
    )
}

export default Message
