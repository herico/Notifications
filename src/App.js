import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NotificationItem from './components/NotificationItem';

import './style.css';

export default function App() {
  const [notifications, setNotifications] = React.useState([
    {
      fullname: 'Mark Webber',
      profileImage:
        'https://images.pexels.com/photos/9895334/pexels-photo-9895334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'reacted',
      notificationExtras: {
        post: 'My first tournament today!',
      },
      timestamp: '1m ago',
      read: false,
      uuid: uuidv4(),
    },
    {
      fullname: 'Angela Gray',
      profileImage:
        'https://images.pexels.com/photos/8727406/pexels-photo-8727406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'followed',
      notificationExtras: {},
      timestamp: '5m ago',
      read: false,
      uuid: uuidv4(),
    },
    {
      fullname: 'Jacob Thompson',
      profileImage:
        'https://images.pexels.com/photos/6973962/pexels-photo-6973962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'joined',
      notificationExtras: {
        group: 'Chess Club!',
      },
      timestamp: '1 day ago',
      read: false,
      uuid: uuidv4(),
    },
    {
      fullname: 'Rizky Hasanuddin',
      profileImage:
        'https://images.pexels.com/photos/623305/pexels-photo-623305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'messaged',
      notificationExtras: {
        message:
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      timestamp: '5 days ago',
      read: true,
      uuid: uuidv4(),
    },
    {
      fullname: 'Kimberly Smith',
      profileImage:
        'https://images.pexels.com/photos/4620808/pexels-photo-4620808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'commented',
      notificationExtras: {
        picture:
          'https://images.pexels.com/photos/3624854/pexels-photo-3624854.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      timestamp: '1 week ago',
      read: false,
      uuid: uuidv4(),
    },
    {
      fullname: 'Nathan Peterson',
      profileImage:
        'https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'reacted',
      notificationExtras: {
        post: '5 end-game strategies to increase your win rate',
      },
      timestamp: '2 weeks ago',
      read: true,
      uuid: uuidv4(),
    },
    {
      fullname: 'Anna Kim',
      profileImage:
        'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      notificationType: 'left',
      notificationExtras: {
        group: 'Chess Club',
      },
      timestamp: '2 weeks ago',
      read: true,
      uuid: uuidv4(),
    },
  ]);
  const [show, setShow] = React.useState(false);

  const notificationChanged = (uuid) => {
    setNotifications(
      notifications.map((n) => {
        if (n.uuid === uuid) {
          console.log(n);
          n.read = !n.read;
        }
        return n;
      })
    );
  };

  const setAllNotificationsAsRead = () => {
    setNotifications(
      notifications.map((n) => {
        n.read = true;
        return n;
      })
    );
  };
  return (
    <div className="container">
      <div className="header">
        <h1 onClick={() => setShow(!show)} className="heading">
          Notifications{' '}
          <span>{notifications.filter((n) => !n.read).length}</span>
        </h1>
        <button
          className={`${show ? 'show' : ''} mark-all-as-read`}
          onClick={setAllNotificationsAsRead}
        >
          Mark all as read
        </button>
      </div>
      <main>
        <ul className={`list ${show ? 'show' : ''}`}>
          <li>
            {notifications.map((notification) => (
              <NotificationItem
                notificationChanged={notificationChanged}
                key={notification.uuid}
                {...notification}
              />
            ))}
          </li>
        </ul>
      </main>
    </div>
  );
}
