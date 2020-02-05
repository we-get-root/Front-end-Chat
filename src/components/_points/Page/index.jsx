import React, { useState } from 'react';
import { Empty, Input, Icon } from 'antd';

import UserItem from './../../_component/UserItem/UserItem'
import Search from './../../_component/Search/Search'
import './index.scss';

import { users } from './testBackend/testBackend';


const PageIndex = (props) => {
  const { TextArea } = Input;

  const [filterArr, setFilterArr] = useState(users)
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
                isOnline={user.isOnline} />
            )
          })}
        </div>
        <div className="page-point__section-dialog">
          <div className="page-point__heder-dialog">
            <img src={users[0].avatar} alt={`avatar ${users[1].fullName}`} />
            <p>{users[0].name}</p>
          </div>

          <div className="page-point__input-message">
          <Icon type="paper-clip" className="page-point__paper-clip" />
            <TextArea
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



export default PageIndex;


