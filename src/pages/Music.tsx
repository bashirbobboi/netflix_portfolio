import React from 'react'; 
import './Music.css';
import albumCover1 from '../images/mbdtf-1.jpg'; // Kanye West's Greatest Album
import albumCover2 from '../images/mots.jpg'; // Je Te Laisserai Des Mots by Patrick Watson
import albumCover3 from '../images/pacas.jpg'; // Que Sigan Llegando Las Pacas by Chino Pacas

const favoriteGenres = ["90's Rap", "Pop", "RnB", "House", "Introspective Rap"];
const favoriteAlbums = [
  { title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", imgSrc: albumCover1 },
  { title: "Je Te Laisserai Des Mots", artist: "Patrick Watson", imgSrc: albumCover2 },
  { title: "Que Sigan Llegando Las Pacas", artist: "Chino Pacas", imgSrc: albumCover3 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>🎼 "Mood, Melody, and Meaning – My Personal Picks" </p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
