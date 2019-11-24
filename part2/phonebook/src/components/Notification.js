import React from "react";

const Notification = ({ isNotificationVisible, notificationMessage }) => {
  if (isNotificationVisible === false) {
    return null;
  }

  const notificationStyle = {
    color: "green",
    backgroundColor: "lightgrey",
    padding: 10,
    margin: "20px 2px",
    border: "solid 2px green"
  };

  return <div style={notificationStyle}>{notificationMessage} </div>;
};

export default Notification;
