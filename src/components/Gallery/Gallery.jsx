import "./index.css";
import imageLinks from "../../assets/imageLinks";
const Gallery = () => {
  return (
    <div className="Gallery">
      <h1 className="Gallery__title" >My Gallery</h1>

      {imageLinks.map((imageLinks) => (
        <img
          className="Gallery__image"
          src={imageLinks.url}
          alt="image"
          key={imageLinks.id}
        />
      ))}
    </div>
  );
};
export default Gallery;
