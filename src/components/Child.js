import React from 'react';
export default function Child({ isLoggedIn, setisLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoggedIn(true);
  };
  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input type="text" />
          <br />
          <br />
          <label>Password: </label>
          <input type="password" />
          <br />
          <br />
          <button>Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
}
