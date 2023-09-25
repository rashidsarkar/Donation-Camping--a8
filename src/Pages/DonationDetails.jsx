import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Layout/MainLayaout";
import useFindDataById from "../Hooks/UseFinddata";

function DonationDetails() {
  const contestApiValue = useContext(GlobalContext);
  const { id } = useParams();
  const foundDonationData = useFindDataById(id, contestApiValue);

  console.log(foundDonationData);
  if (!foundDonationData) {
    return "";
  }
  const {
    picture,

    description,

    title,
    text_button_bg,
    price,
  } = foundDonationData;
  console.log(picture);
  const btnStyle = {
    backgroundColor: text_button_bg,
    // color: text_button_bg,
  };
  return (
    <>
      <div className="test2">
        <div
          className="h-[500px] flex justify-center relative  p-12 object-cover overflow-hidden text-center bg-center  bg-no-repeat bg-cover rounded-lg "
          style={{ backgroundImage: `url('${picture}')` }}
        >
          {/* <img className="h-full" src={picture} alt="" /> */}
          <div
            className="absolute flex items-center bottom-0 left-0 right-0 w-full h-[20%] overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <button
              style={btnStyle}
              className={`btn overflow-hidden outline-none text-white  border-0 lg:ml-8 ]`}
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg text-justify text-[#0b0b0bb3] mt-6">
          {description}
        </p>
      </div>
    </>
  );
}

export default DonationDetails;
