import React, { useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

  const loadPromt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="menu-icon" />
            <div onClick={() => newChat()} className="new__chat">
                <img src={assets.plus_icon} alt="plus-icon" />
                {extended ? <p>New Chat</p> : null}
            </div>
            { extended ?
            <div className="recent">
              <p className="recent__title">Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div onClick={() => loadPromt(item)} className="recent__entry">
                    <img src={assets.message_icon} alt="message-icon" />
                    <p>{item.slice(0,18)} ...</p>
                  </div>
                )
              })}
             
            </div> : null    
            }
            
        </div>

        <div className="bottom">
          <div className="bottom__item recent__entry">
            <img src={assets.question_icon} alt="question-icon" />
              {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom__item recent__entry">
            <img src={assets.history_icon} alt="history-icon" />
              {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom__item recent__entry">
            <img src={assets.setting_icon} alt="setting-icon" />
              {extended ? <p>Settings</p> : null}
          </div>
        </div>
    </div>
  )
}

export default Sidebar