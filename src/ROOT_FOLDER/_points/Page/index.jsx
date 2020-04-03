import React, { useState, useEffect } from 'react';
import { Empty, Input, Icon } from 'antd';
import { connect } from 'react-redux';

import ava from '../../_imagine/avatar__.jpg'

import {
  CameraOutlined,
  SettingOutlined,
  EllipsisOutlined,
  TeamOutlined,
  EditOutlined,
  UserOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

import { getUsersItem, getUsersDialog, getMy, } from '../../_state/request';
import UserItem from '../../_component/UserItem/UserItem';
import Search from '../../_component/Search/Search';
import Message from '../../_component/Message/Message';
import Loading from '../../_component/Loading/Loading';
import './index.scss';


const PageIndex = ({ users, messages, getUsersItem, getUsersDialog, getMy, my, loading, ...props }) => {

  const res = Object.entries(my)
  const a = (res.length === 0) ? getMy() : null

  const [itemUser, setItemUser] = useState(Array.from(users))
  const [value, setValue] = useState('')
  const changeValue = (value) => setItemUser(users.filter((val) => val.name.toLowerCase().indexOf(value.toLowerCase()) >= 0))

  useEffect(() => { (users.length === 0) ? getUsersItem('users') : setItemUser(users) }, [getUsersItem, setItemUser, users])

  return (
    <>
      <header className="page-header">
        <div>Hello</div>
        {/* {itemUser.length === 0 ? null : <img src={itemUser[0].avatar} alt={`avatar`} />}
        {itemUser.length === 0 ? null : <p>{itemUser[0].name}</p>} */}
      </header>

      <div className="page-point">
        <div className="page-point__section-users">
          <div>
            {/* <img src="/logo.full.png" /> */}
          </div>
          <div className="page-point__search">
            <Search changeValue={changeValue} />
          </div>
          {itemUser.length === 0 ?
            <Empty className="page-point__is-empty" description="Ничего не найдено" /> :
            itemUser.map((user) => {
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
          <div className="page-point__wrapper-message" >
            {loading ? <Loading /> :
              messages.length === 0 ?
                <Empty className="page-point__is-empty" description="Ничего не найдено" /> :
                messages.map((message) => {
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


        <section className="section-profile">
          <div className="section-profile__block-user">
            <SettingOutlined className="button-setting__3VhDbc" />
            <div className="block-user__fraction_one">
              <div className="profile-avatar__JZwlIP">
                <img src={my.avatar} />
                <button className="button-avatar__gOe3hL">
                  <CameraOutlined />
                </button>
              </div>
            </div>
            <div className="block-user__fraction_two">
              <h2>{my.fullName}</h2>
              <p><b>О себе:</b> Привет меня зовут дима я блять крутой чел и нуб в програмировании!</p>
            </div>
            <div className="block-user__statistics-account">
              <div className="block-user__statistics-item" style={{ gridArea: "a1" }}>
                <TeamOutlined />
                <p>1245</p>
              </div>
              <div className="block-user__statistics-item" style={{ gridArea: "a2" }}>
                <EditOutlined />
                <p>1 245</p>
              </div>
              <div className="block-user__statistics-item" style={{ gridArea: "a3" }}>
                <UserOutlined />
                <p>1 245</p>
              </div>
              <div className="block-user__statistics-item" style={{ gridArea: "a4" }}>
                <ThunderboltOutlined />
                <p>1 245</p>
              </div>
            </div>
          </div>
          <div className="section-profile__block-friends">
            <div className="title-block__friends" onClick={() => alert('hello')}>
              <h3>Friends</h3>
              <span></span>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valeradddfff</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
            <div className="test_avatar_user">
              <div><img src={ava} alt="avatar" /></div>
              <p>Valera</p>
            </div>
          </div>
          <div className="section-profile__block-photos">

          </div>
          {/*           
          <div className="section-profile__block-manager">
            <button className="button-setting__gOe3hL" style={{ gridArea: 'b1' }}>
              <EllipsisOutlined />
            </button>
            <button className="button-setting__gOe3hL" style={{ gridArea: 'b2' }}>
              <EllipsisOutlined />
            </button>
            <button className="button-setting__gOe3hL" style={{ gridArea: 'b3' }}>
              <EllipsisOutlined />
            </button>
            <button className="button-setting__gOe3hL" style={{ gridArea: 'b4', background: 'silver' }}>
              <EllipsisOutlined />
            </button>
          </div> */}

        </section>

      </div>
    </>
  )
}

const mapStateToProps = (state) => console.log(state) || ({
  users: state.pageState.users,
  messages: state.pageState.messages,
  loading: state.pageState.loading,
  my: state.pageState.my,
})

export default connect(mapStateToProps, ({ getUsersItem, getUsersDialog, getMy }))(PageIndex)



