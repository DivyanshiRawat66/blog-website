import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter Your Email ID" />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your Password" />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register" >
            REGISTER
            </Link>
            </button>
        </div>
  )
}
