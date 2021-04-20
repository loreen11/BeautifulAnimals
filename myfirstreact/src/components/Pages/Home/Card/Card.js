
const Card = ({ name, text, linkText, image, className }) => {
  const classString = "col-4"+ " " + className
  return (
    <div className={classString}>
      <img className="card-img-top1" src={image} alt="Card image"/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{text}</p>
        <a href="#" class="btn btn-primary stretched-link">{linkText}</a>
      </div>
    </div>
  );
}

export default Card;
