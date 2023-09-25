import { useParams } from "react-router-dom";

function DonationDetails() {
  const { id } = useParams();
  return <div>DonationDetails id is : {id} </div>;
}

export default DonationDetails;
