import React from "react";
/**
 * User object
 * @param {*} props
 */
const User = (props) => {
  let { name, username, email } = props;
  let container = { border: "1px solid green", padding: "5px 0px" };
  let userDetails = { margin: 2, padding: 2 };
  return (
    <div style={container}>
      <div style={userDetails}>
        <label style={{ fontWeight: "bold" }}>Name: </label>
        <span>{name}</span>
      </div>
      <div style={userDetails}>
        <label style={{ fontWeight: "bold" }}>User Name: </label>
        <span>{username}</span>
      </div>
      <div style={userDetails}>
        <label style={{ fontWeight: "bold" }}>Email: </label>
        <span>{email}</span>
      </div>
    </div>
  );
};

/**
 * User List for the User object
 * @param {*} props
 */
const UserList = (props) => {
  return props.users.map((user, index) => <User {...user} key={index} />);
};

export default UserList;
