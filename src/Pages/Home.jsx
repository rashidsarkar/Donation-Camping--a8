import { useContext } from "react";
import Banner from "../Components/Banner/Banner";
import { GlobalContext } from "../Layout/MainLayaout";
import DonationsCard from "../Components/Donations/DonationsCard";
import Donation from "./Donation";

function Home() {
  const contestApiValue = useContext(GlobalContext);
  console.log(contestApiValue);
  return (
    <>
      <Banner></Banner>
      {/* <div>
        {contestApiValue.map((contestApiValue) => (
          <DonationsCard
            key={contestApiValue.id}
            donationsData={contestApiValue}
          ></DonationsCard>
        ))}
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {contestApiValue?.map((donatData) => (
          <DonationsCard
            key={donatData.id}
            donationsData={donatData}
          ></DonationsCard>
        ))}
      </div>
    </>
  );
}

export default Home;
