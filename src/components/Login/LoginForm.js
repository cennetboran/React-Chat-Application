import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import Loading from "../util/Loading";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const authObject = {
      "Project-ID": "ac1af39c-9a05-44c3-b40c-9bfe712d95d4",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      setLoading(true);
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setLoading(false);
      setError("Oops, incorrect credeintianls 💀");
    }
  }
  return (
    <div className="wrapper">
      {loading ? (
        <Loading color="#000" />
      ) : (
        <div className="form">
          <h1 className="title">React Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Uername.."
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start Chatting</span>
              </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
        </div>
      )}
    </div>
  );
};
export default LoginForm;
