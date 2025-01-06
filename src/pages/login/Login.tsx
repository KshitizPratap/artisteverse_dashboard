import { MdEmail } from "react-icons/md";
import Logo from "../../assets/login-logo.png";
import { FaKeyboard } from "react-icons/fa";
import { globalStore } from "../../store/globalStore";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.scss";

const Login = () => {
  const { setIsAuth } = globalStore();
  const navigate = useNavigate();

  const loginHandler = () => {
    setIsAuth(true);
    navigate("/");
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.header}>
          <img src={Logo} alt="" />
          <span>Welcome to Artisteverse</span>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.input}>
            <MdEmail />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email ID"
            />
          </div>

          <div className={classes.input}>
            <FaKeyboard />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={loginHandler}>LOGIN</button>
          <span>Forget Password</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
