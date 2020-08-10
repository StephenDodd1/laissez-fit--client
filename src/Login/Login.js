import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <label for="username">Username</label>
        <input id="username" />
        <label for="password">Password</label>
        <input id="password" />
      </form>
    </div>
  );
}
