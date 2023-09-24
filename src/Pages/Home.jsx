import { useContext } from "react";
import Banner from "../Components/Banner/Banner";
import { GlobalContext } from "../Layout/MainLayaout";

function Home() {
  const contestApiValue = useContext(GlobalContext);
  console.log(contestApiValue);
  return (
    <>
      <Banner></Banner>
    </>
  );
}

export default Home;
