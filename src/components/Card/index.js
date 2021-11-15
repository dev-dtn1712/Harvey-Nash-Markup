import './_styles.css';

const Card = ({ item }) => (
  <div className="card">
    <div className="card_image">
      <img src={item.img} alt={item.img} />
    </div>
    <div className="card_desciprtion">
      <h3 className="card_title">{item.title}</h3>
      <div className="card_content">
        <span>{item.content}</span>
      </div>
    </div>
  </div>
);

export default Card;