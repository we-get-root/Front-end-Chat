import React from 'react';
import moment from 'moment';
import './userItem.scss';

import { dataGradient } from './../../_points/generatorGradient/generator';


const UserItem = ({ fullName, avatar, timeMessage, lastMessage, isOnline, ...props }) => {

  const firstStr = fullName.substr(0, 1)
  const lg = dataGradient.generator(firstStr)

  return (
    <div className="item-user">
      <div className="item-user__user-avatar">
        {avatar === null ? <div className="item-user__null-avatar" style={{ background: lg }} >{firstStr}</div> : <img src={avatar} alt="avatar" />}
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
