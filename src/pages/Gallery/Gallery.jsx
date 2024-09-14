import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

const images = [
  { id: 'nukkad', src: 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', title: 'Nukkad Natak' },
  { id: 'andha', src: 'https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif', title: 'Andha Mor' },
  { id: 'treasure', src: 'https://i.postimg.cc/YCKNnQCJ/DSC-0596.jpg', title: 'Treasure Hunt' },
  { id: 'faculty', src: 'https://i.postimg.cc/qB5JsLvx/DSC-0317.png', title: 'Faculty Event' },
  { id: 'vaachan', src: 'https://i.postimg.cc/tC59SBsn/IMG-20230911-173032918.jpg', title: 'Kavita Vachan' },
  { id: 'tatkalik', src: 'https://i.postimg.cc/Xq0LZPz7/DSC01765.jpg', title: 'Tatkalik Bhashan' },
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GALLERY</h1>
      <h2 className="sub-title">Memories of Aawahan'23</h2>
      <div className="layer">
        <div>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                  onClick={() => handleClick(image.id)} 
                />
                <div className="image-title">{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="second-title">Memories of Aawahan'22</h3>
      <div className="layer">
        <div>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="image-title">{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
