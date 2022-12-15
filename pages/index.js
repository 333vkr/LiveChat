import Head from "next/head";
import Favicon from "../public/favicon.ico";
import Style from "../styles/Home.module.css";
import LoginForm from "./Components/Auth/LoginForm";
const Home = () => {
  return (
    <>
      <Head>
        <title>Live Chat</title>
        <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" />
      </Head>
      <div className={Style.pageBackground}>
        <div className={Style.leftContainer}>

          <div>
            <img src="/home icons/match.png" alt="" />
          </div>



        </div>
        <div className={Style.rightContainer}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Home;
