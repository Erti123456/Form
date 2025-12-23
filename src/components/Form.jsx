import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [nameColor, setNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 9) {
      setErrorName("Name must be at least 9 characters long");
      setNameColor("red");
    } else {
      setErrorName("");
      setNameColor("green");
    }

    if (email.includes("@gmail")) {
      setEmailColor("green");
      setErrorEmail("");
    } else {
      setErrorEmail("Email is not valid");
      setEmailColor("red");
    }

    if (password.length < 9) {
      setPasswordColor("red");
      setErrorPassword("Password must be at least 9 characters long");
    } else {
      setPasswordColor("green");
      setErrorPassword("");
    }

    if (password !== confirmPassword || confirmPassword.length === 0) {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword("Passwords must match");
    } else {
      setConfirmPasswordColor("green");
      setErrorConfirmPassword("");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ borderColor: nameColor }}
          />

          <p className="error">{errorName}</p>

          <input
            style={{ borderColor: emailColor }}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            style={{ borderColor: passwordColor }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            style={{ borderColor: confirmPasswordColor }}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
