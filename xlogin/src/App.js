import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [err, setErr] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const validate = (user, pass) => {
    if (user !== "user" || pass !== "password") {
      return false;
    }
    return true;
  };

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(loginData.username, loginData.password)) {
      setErr(true);
      return;
    }
    setIsLogin(true);
  };
  return (
    <>
      <h1>Login Page</h1>

      {isLogin ? (
        <div>Welcome, user!</div>
      ) : (
        <>
          {err ? <div>Invalid username or password</div> : null}
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              name="username"
              onChange={handleInput}
              value={loginData.username}
              required
            />
            <br />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              onChange={handleInput}
              value={loginData.password}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
