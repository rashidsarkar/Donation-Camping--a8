function DonationsCard({ donationsData }) {
  const { picture, card_bg, category, category_bg, text_button_bg } =
    donationsData;
  console.log(card_bg);
  const cardStyle = {
    backgroundColor: card_bg,
  };
  const textStyle = {
    backgroundColor: category_bg,
    color: text_button_bg,
  };

  return (
    <div>
      <div style={cardStyle} className={`my-5 shadow-xl card w-96 ]`}>
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className={`card-body inline-block ]`}>
          <h2
            style={textStyle}
            className="inline-block p-2 rounded-lg card-title "
          >
            {category}
          </h2>
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
