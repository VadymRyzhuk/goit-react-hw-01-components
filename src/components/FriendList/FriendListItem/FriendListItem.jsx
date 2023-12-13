import React from 'react'
import css from "./FriendListItem.module.css"

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
      
          <li className={css.item} key={id}>
            <span className={`${css.status} ${isOnline ? css.statusOnline : css.statusOffline}`}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
</li>
      
  )
}

export { FriendListItem };