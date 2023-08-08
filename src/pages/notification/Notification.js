import React from 'react'
import addNotification from 'react-push-notification';

export const Notification = () => {

  const buttonClick = () => {
    addNotification({
        title: 'Warning',
        subtitle: 'This is a subtitle',
        message: 'hi labib',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
};

  return (
    <div className="page">
    <button onClick={buttonClick} className="button">
     Hello world.
    </button>
    </div>
  )
}
