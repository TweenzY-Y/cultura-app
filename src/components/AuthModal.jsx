import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const textContent = {
  login: { header: "Login", description: "Sign in to continue your journey", btnText: "Login" },
  register: { header: "Join cultura", description: "Create an account to get started", btnText: "Create account" },
};

function LoginForm({ formData, handleInputChange }) {
  return (
    <>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />

      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
    </>
  );
}
function RegisterForm({ formData, handleInputChange }) {
  return (
    <>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        placeholder="Confirm password"
        required
      />
    </>
  );
}

export default function AuthModal({ isOpen, modalTab, openModal, closeModal }) {
  const [formData, setFormData] = useState({ email: "", username: "", password: "", confirmPassword: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Strapi backend
    console.log("Form submitted");
    closeModal();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;
  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          <RiCloseLine />
        </button>
        <div className="modal-header">
          <h2>{textContent[modalTab].header}</h2>
          <p>{textContent[modalTab].description}</p>
        </div>
        <form onSubmit={handleSubmit}>
          {modalTab === "login" ? (
            <LoginForm formData={formData} handleInputChange={handleInputChange} />
          ) : (
            <RegisterForm formData={formData} handleInputChange={handleInputChange} />
          )}
          <button type="submit" className="modal-btn">
            {textContent[modalTab].btnText}
          </button>
        </form>
        <div className="modal-footer">
          {modalTab === "login" ? (
            <p>
              Don't have an account? <a onClick={() => openModal("register")}>Register</a>
            </p>
          ) : (
            <p>
              Already have an account? <a onClick={() => openModal("login")}>Login</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
