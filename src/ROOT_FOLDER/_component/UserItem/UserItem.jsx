import React from 'react';
import moment from 'moment';
import './userItem.scss';

import { dataGradient } from '../../_modules/generator/genGradient';


const UserItem = ({ userId, isAuthUserId, fullName, avatar, timeMessage, lastMessage, isOnline, idRoomDialog, getUsersDialog, ...props }) => {

  const firstStr = fullName.substr(0, 1)
  const lg = dataGradient.generator(firstStr)

  const arrCheck = (idRoomDialog.length > 0) ? true : false; 
  return (
    <div className="item-user" onClick={() => arrCheck ? getUsersDialog('messages', '_idRoom', userId, isAuthUserId) : null }>
      <div className="item-user__user-avatar">
        {avatar === null ? <div className="item-user__null-avatar" style={{ background: lg }} >{firstStr}</div> : <img src={avatar} onClick={() => console.log('hello')} alt="avatar" />}
        {isOnline ? <span style={{ background: 'green' }}></span> : <span style={{ background: 'silver' }}></span>}
      </div>
      <div className="item-user__first-name">
        <p>{fullName}</p>
      </div>
      <div className="item-user__current-message">
        {lastMessage}
      </div>
      <div className="item-user__current-time">
        {moment(timeMessage, "YYYYMMDD").fromNow()}
      </div>
    </div>
  )
}

export default UserItem;
