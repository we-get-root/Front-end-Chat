import React, { useState, useEffect } from 'react';
import { Empty, Input, Icon } from 'antd';
import { connect } from 'react-redux';


import {
  getUsersItem,
  getUsersDialog,
  userAuthorization
} from '../../_state/request';
import UserItem from '../../_component/UserItem/UserItem';
import Search from '../../_component/Search/Search';
import Message from '../../_component/Message/Message';
import Loading from '../../_component/Loading/Loading';
import './index.scss';


const PageIndex = ({ users, messages, getUsersItem, getUsersDialog, userAuthorization, loading, ...props }) => {

  const whatTake = 'users';

  userAuthorization({ email: "test@mail.ru", password: 'qwerty' })

  const [itemUser, setItemUser] = useState(Array.from(users))
  const [value, setValue] = useState('')
  const changeValue = (value) => setItemUser(users.filter((val) => val.name.toLowerCase().indexOf(value.toLowerCase()) >= 0))

  useEffect(() => { (users.length === 0) ? getUsersItem(whatTake) : setItemUser(users) }, [getUsersItem, setItemUser, users])

  return (
    <>
      <section className="page-point">
        <div className="page-point__section-users">
          <div>
            <img src="/logo.full.png" />
          </div>
          <div className="page-point__search">
            <Search changeValue={changeValue} />
          </div>
          {itemUser.length === 0 ? <Empty className="page-point__is-empty" description="Ничего не найдено" /> : itemUser.map((user) => {
            return (
              <UserItem
                key={user.id}
                userId={user.id}
                isAuthUserId={16312443541} // потом подгружать асинхронно 
                fullName={user.name}
                avatar={user.avatar}
                timeMessage={user.timeLastMessage}
                lastMessage={user.lastMessage}
                isOnline={user.isOnline}
                idRoomDialog={user.idRoomDialog}
                getUsersDialog={getUsersDialog}
              />
            )
          })}
        </div>
        <div className="page-point__section-dialog">
          <div className="page-point__heder-dialog">
            {itemUser.length === 0 ? null : <img src={itemUser[0].avatar} alt={`avatar`} />}
            {itemUser.length === 0 ? null : <p>{itemUser[0].name}</p>}
          </div>
          <div className="page-point__wrapper-message" >
            {loading ? <Loading /> : messages.length === 0 ? <Empty className="page-point__is-empty" description="Ничего не найдено" /> : messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  isText={message.text}
                  isTime={message.time}
                  isId={message.id}
                  isImagines={message.img}
                  isInterlocutor={message.interlocutor}
                />
              )
            })}
          </div>

          <div className="page-point__input-message">
            <Icon type="paper-clip" className="page-point__paper-clip" />
            <Input.TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Введите сообщение..."
              autoSize={{ minRows: 2, maxRows: 6 }} />
          </div>
        </div>

        <div className="page-point__section-profile">

        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.pageState.users,
  messages: state.pageState.messages,
  loading: state.pageState.loading,
})

export default connect(mapStateToProps, ({ getUsersItem, getUsersDialog, userAuthorization }))(PageIndex)



