import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";
import Button from "../../Components/Shared/Button/Button";

const Home = () => {
  const handleClick = () => {};

  return (
    <div className={style.card_wrapper}>
      <Card title="Welcome to coder’s House">
        <p className={style.text}>
          Welcome to Coder's House Podcast – your digital hub for all things
          coding and development. Our platform is your gateway to insightful
          discussions, expert interviews, and invaluable resources designed to
          fuel your passion for coding...
        </p>
        <Link to="/Register">
          <Button text="Get your Username" onClick={handleClick} />
        </Link>
        <div>
          <span>already have Username? </span>
          <span>
            <Link className={style.link_wrapper} to="/login">
              Sign up
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
