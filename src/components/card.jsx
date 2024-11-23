import './style/Collection.css';

function Card() {
  return (
    <div className="image-container">
      <img 
        className="champion-image" 
        src="https://images.pexels.com/photos/3531081/pexels-photo-3531081.jpeg" 
        alt="Champion"
      />
    </div>
  );
}

export default Card;
