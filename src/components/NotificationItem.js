import React from 'react';

export default function NotificationItem({
  notificationChanged,
  fullname,
  profileImage,
  notificationType,
  notificationExtras: { group, post, message, picture } = {},
  timestamp,
  read,
  uuid,
} = {}) {
  const notificationActions = {
    followed: 'followed you',
    unfollowed: 'unfollowed you',
    reacted: 'reacted to your recent post',
    joined: 'has joined your group',
    messaged: 'sent you a private message',
    left: 'left the group',
    commented: 'commented on your picture',
  };
  const notificationActionExtras = {
    reacted: post,
    joined: group,
    left: group,
    followed: null,
    messaged: null,
  };
  return (
    <div
      className={`notification ${
        notificationType === 'messaged' ? 'messaged' : ''
      }`}
    >
      <img className="profile" src={profileImage} alt={fullname} />
      <div className="content" onClick={() => notificationChanged(uuid)}>
        <p className={`text ${!read ? 'unread' : ''}`}>
          <span className="fullname">{fullname}</span>{' '}
          <span className="action">
            {notificationActions[notificationType]}{' '}
          </span>
          <span className={notificationType}>
            {notificationActionExtras[notificationType]}
          </span>
        </p>
        <span className="time">{timestamp}</span>
        {notificationType === 'messaged' && (
          <p className={`message ${read ? 'show' : ''}`}>{message}</p>
        )}
        {notificationType === 'commented' && (
          <img className={`picture ${read ? 'show' : ''}`} src={picture} />
        )}
      </div>
    </div>
  );
}
