import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Layout/MainLayaout";
import useFindDataById from "../Hooks/UseFinddata";

function DonationDetails() {
  const contestApiValue = useContext(GlobalContext);
  const { id } = useParams();
  const foundDonationData = useFindDataById(id, contestApiValue);

  console.log(foundDonationData);

  return <div>DonationDetails id is : {id} </div>;
}

export default DonationDetails;
