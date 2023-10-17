import "./Card.css";

const Card = ({ title, price, category, image }) => {
  if (!title && !price && !category && !image) {
    return null;
  }
  return (
    <div className="card">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="card-details">
        <h2>Name: {title}</h2>
        <h3>Price: {price}</h3>
        <h3>Category: {category}</h3>
        <button>Detail</button>
      </div>
    </div>
  );
};

export default Card;
