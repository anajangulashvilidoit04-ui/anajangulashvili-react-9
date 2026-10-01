import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        if (!value.includes("@")) {
          return "Invalid email address";
        }
        return "";
      case "password":
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return "";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailErr = validateInput("email", email);
    const passwordErr = validateInput("password", password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    setEmail("");
    setPassword("");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError(validateInput("email", value));
    } else if (name === "password") {
      setPassword(value);
      setPasswordError(validateInput("password", value));
    }
  };
  const isBtnDisabled =
    emailError !== "" ||
    passwordError !== "" ||
    email === "" ||
    password === "";
  return (
    <> 
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-1/3 mx-auto mt-20"
      >
        <input
          type="email"
          placeholder="enter your email"
          required
          value={email}
          onChange={handleChange}
          name="email"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={handleChange}
          required
          name="password"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <button
          disabled={isBtnDisabled}
          type="submit"
          className="py-2 px-4 rounded-md text-white transition-colors"
          style={{
            backgroundColor: isBtnDisabled ? "#888" : "#3b82f6",
            cursor: isBtnDisabled ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
