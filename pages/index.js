import Head from "next/head";
import Favicon from "../public/chat_icon.png";
import Style from "../styles/Home.module.css";
const Home = () => {
  return (
    <>
      <Head>
        <title>Live Chat</title>
      </Head>
      <div className={Style.pageBackground}>
        <div className={Style.leftContainer}>Left Container</div>
        <div className={Style.rightContainer}>Right Container</div>
      </div>
    </>
  );
};

export default Home;
