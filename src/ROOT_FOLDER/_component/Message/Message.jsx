import React from 'react';
import moment from 'moment'
import classnames from 'classnames';

import './message.scss'

const Message = ({ isText, isTime, isId, isImagines, isInterlocutor, ...props }) => {

  return (
    <>
      <section className={classnames({ "message": isInterlocutor, "my-message": !isInterlocutor })}>
        {isInterlocutor ? <div className="message__user-avatar" >
          <img src="https://historytime.ru/wp-content/uploads/2016/10/che-770x578.jpg" alt="avatar" />
        </div> : null}
        <div className={classnames({ "message__block-message": isInterlocutor, "my-message__block-message": !isInterlocutor })} style={{ width: isText.length * 6 }}>
          <p>{isText}</p>
          <div className={classnames({ "message__time": isInterlocutor, "my-message__time": !isInterlocutor })}>{moment().format(isTime)}</div>
        </div>
      </section>
      {isImagines.map((imgSrc, i) => {
        console.log(imgSrc)
        return (
          <div>
            <img src={imgSrc} alt="img" />
          </div>
        )
      })}
    </>
  )
}


export default Message;