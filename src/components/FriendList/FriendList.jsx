import React from 'react'
import {FriendListItem} from "./FriendListItem/FriendListItem.jsx"
import css from  "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <div className={css.mainList}>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return  <FriendListItem key={friend.id} {...friend}/>
  })}
</ul>
    </div>
  )
}

export { FriendList };