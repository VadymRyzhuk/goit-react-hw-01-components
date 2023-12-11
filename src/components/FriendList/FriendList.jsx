import React from 'react'
import css from  "./FriendList.module.css"

const FriendList = ({friends, isOnline}) => {
  return (
    <div className={css.mainList}>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return  <li className={css.item} key={friend.id}>
            <span className={`${css.status} ${friend.isOnline ? css.statusOnline : css.statusOffline}`}></span>
  <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
</li>
  })}
</ul>
    </div>
  )
}

export { FriendList };