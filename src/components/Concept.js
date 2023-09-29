const Concept = ({ title, image, description }) => {
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
        </li>
      </ul>
    </div>
  );
};
export default Concept;
