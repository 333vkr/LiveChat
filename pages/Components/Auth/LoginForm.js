import Link from "next/link";
import Style from "../../../styles/Auth/Login.module.css";
const LoginForm = () => {
  return (
    <div className={Style.loginFormParent}>
      <h1>Login</h1>
      <form>
        <div className={Style.inputGroup}>
          <label htmlFor="userNameInput">Email</label>
          <input type={"email"} required id="userNameInput" placeholder="abc@xyz.com"/>
        </div>
        <div className={Style.inputGroup}>
          <label htmlFor="passwordInput">Password</label>
          <input type={"password"} required id="passwordInput" placeholder="*********"/>
        </div>
        <button className={Style.loginBtn}>Get in</button>
      </form>
      <div className={Style.bottomTextContainer}>
      <p>Dont you have an account?</p>
      <Link href={'#'}>Start your journey</Link>
      </div>


    </div>
  );
};

export default LoginForm;
