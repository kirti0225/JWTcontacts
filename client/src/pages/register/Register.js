import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
//import "./register.css";

function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/");
  //   }
  // }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem 3rem",
        paddingBottom: "2rem",
        borderRadius: "0.5rem",
        borderTop: "rgb(80, 98, 255) 0.5rem solid",
        marginRight: "auto",
        marginLeft: "auto",
        width: "400px",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginTop: "-200px",
        width: "400px",
        marginLeft: "-200px",
      }}
      className="container"
    >
      <h2
        style={{
          margin: "1rem 0",
          color: "black",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        Register Account
      </h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <label htmlFor="email" style={{ color: "black", fontWeight: "bold" }}>
            Email
          </label>
          <input
            style={{
              padding: "0.5rem",
              borderRadius: "0.3rem",
              border: "1px solid gray",
              fonSsize: "1.1rem",
            }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <label
            htmlFor="password"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Password
          </label>
          <input
            style={{
              padding: "0.5rem",
              borderRadius: "0.3rem",
              border: "1px solid gray",
              fonSsize: "1.1rem",
            }}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          style={{
            backgroundColor: "rgb(80, 98, 255)",
            color: "white",
            border: "none",
            padding: "0.5rem",
            fontSize: "1rem",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "0.3rem",
          }}
          type="submit"
        >
          Submit
        </button>
        <span style={{ color: "black", fontWeight: "bold" }}>
          Already have an account ?
          <Link
            style={{ textDecoration: "none", color: "rgb(80, 98, 255)" }}
            to="/login"
          >
            {" "}
            Login
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem 3rem",
        paddingBottom: "2rem",
        borderRadius: "0.5rem",
        borderTop: "rgb(80, 98, 255) 0.5rem solid",
        marginRight: "auto",
        marginLeft: "auto",
        width: "400px",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginTop: "-200px",
        width: "400px",
        marginLeft: "-200px",
      }}
      className="container"
    >
      <h2
        style={{
          margin: "1rem 0",
          color: "black",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        Register Account
      </h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <label htmlFor="email" style={{ color: "black", fontWeight: "bold" }}>
            Email
          </label>
          <input
            style={{
              padding: "0.5rem",
              borderRadius: "0.3rem",
              border: "1px solid gray",
              fonSsize: "1.1rem",
            }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <label
            htmlFor="password"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Password
          </label>
          <input
            style={{
              padding: "0.5rem",
              borderRadius: "0.3rem",
              border: "1px solid gray",
              fonSsize: "1.1rem",
            }}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          style={{
            backgroundColor: "rgb(80, 98, 255)",
            color: "white",
            border: "none",
            padding: "0.5rem",
            fontSize: "1rem",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "0.3rem",
          }}
          type="submit"
        >
          Submit
        </button>
        <span style={{ color: "black", fontWeight: "bold" }}>
          Already have an account ?
          <Link
            style={{ textDecoration: "none", color: "rgb(80, 98, 255)" }}
            to="/login"
          >
            {" "}
            Login
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </>
  );
}

export default Register;
