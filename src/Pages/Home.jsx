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

      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
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
