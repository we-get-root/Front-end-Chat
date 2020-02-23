import React, { useState, useEffect } from 'react';
import { Empty, Input, Icon } from 'antd';
import { connect } from 'react-redux';

import { thunkAddUserItem } from './../../_state/request'
import UserItem from './../../_component/UserItem/UserItem'
import Search from './../../_component/Search/Search'
import './index.scss';


const PageIndex = ({ users, thunkAddUserItem, ...props }) => {

  
  const [filterArr, setFilterArr] = useState(Array.from(users))
  
  useEffect(() => {
    if (users.length === 0) {
      thunkAddUserItem()
    }
    setFilterArr(users)
  }, [users])
  
  
  const [value, setValue] = useState('')
  
  const changeValue = (value) => setFilterArr(users.filter((val) => val.name.toLowerCase().indexOf(value.toLowerCase()) >= 0))

  return (
    <>
      <section className="page-point">
        <div className="page-point__section-users">
          <div>
            bdwgduiwbdik
          </div>
          <div className="page-point__search">
            <Search changeValue={changeValue} />
          </div>
          {filterArr.length === 0 ? <Empty className="page-point__is-empty" description="Ничего не найдено" /> : filterArr.map((user) => {
            return (
              <UserItem
                key={user.id}
                fullName={user.name}
                avatar={user.avatar}
                timeMessage={user.timeLastMessage}
                lastMessage={user.lastMessage}
                isOnline={user.isOnline}
              />
            )
          })}
        </div>

        <div className="page-point__section-dialog">
          <div className="page-point__heder-dialog">
            {/* <img src={item[0].avatar} alt={`avatar`} /> */}
            {/* <p>{item[0].name}</p> */}
          </div>
          <div className="page-point__input-message">
            <Icon type="paper-clip" className="page-point__paper-clip" />
            <Input.TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Введите сообщение..."
              autoSize={{ minRows: 2, maxRows: 6 }} />
            <div className="hidden_block"></div>
          </div>
        </div>

        <div className="page-point__section-profile">

        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.setUserReducer.itemUser,
})

export default connect(mapStateToProps, ({ thunkAddUserItem }))(PageIndex)



