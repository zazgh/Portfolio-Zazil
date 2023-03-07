import React, { useState } from "react";
import {
  validateEmail,
  validateName,
  validateMessage,
} from "../../utils/helpers";

export default function Contact({isHidden}) {

  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      setErrorMessage("Name is invalid");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!validateMessage(message)) {
      setErrorMessage("Message is invalid");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("Thank you for your message!")
  };

  return (
    <main className={ isHidden ? "Hidden" : "portfolioCard cardBorder contactCard"} >
      <h1>Contact me</h1>

            <form onSubmit={handleFormSubmit}>
              <table>
                <tbody>
                <tr>
                  <td className="formPropertyValue">
                    <label htmlFor="name">Name:</label>
                  </td>
                  <td className="formPropertyValue">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleInputChange}
                      value={name}
                    />
                  </td>
                </tr>

                <tr>
                  <td className="formPropertyName">
                    <label htmlFor="email">Email:</label>
                  </td>
                  <td className="formPropertyValue">
                    <textarea
                      type="text"
                      placeholder="email"
                      onChange={handleInputChange}
                      value={email}
                      name="email"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="formPropertyName">
                    <label htmlFor="message">Message:</label>
                  </td>
                  <td className="formPropertyValue">
                    <textarea
                      type="text"
                      placeholder="Message"
                      onChange={handleInputChange}
                      value={message}
                      name="message"
                    />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td className="formPropertyValue">
                    <button type="button" onClick={handleFormSubmit}>
                      Submit
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </form>

            {errorMessage && (
              <div>
                <p className="validationError">{errorMessage}</p>
              </div>
            )}
    </main>
  );
}
