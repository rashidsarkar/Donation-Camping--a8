function DonationsCard({ donationsData }) {
  const { picture } = donationsData;
  return (
    <div>
      <div className="my-5 shadow-xl card w-96 bg-fuchsia-600">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationsCard;
