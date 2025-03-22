// Reading.tsx

import React from 'react';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import quran from '../images/quran.jpg';
import alchemist from '../images/tmm5nljv.png';
import accidentalPublicServant from '../images/elrufai.jpg';
import selectedPoems from '../images/rumi.jpg';
import ignorantSchoolmaster from '../images/ignorant.webp';

const books = [
  {
    title: "Al-Quran",
    author: "",
    imgSrc: quran,
    description: "Guidance, peace, purpose, and a constant reminder of Allah's mercy.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "The Accidental Public Servant",
    author: "Nasir Ahmad El-Rufai",
    imgSrc: accidentalPublicServant,
    description: "A compelling eye-opener on leadership and public policy.",
  },
  {
    title: "Selected Poems",
    author: "Rumi",
    imgSrc: selectedPoems,
    description: "Rumi’s words feel like whispers to the soul—timeless, healing, and stimulating.",
  },
  {
    title: "The Emirates of Northern Nigeria: A Preliminary Survey of Their Historical Traditions",
    author: "S. J. Hogben and A. H. M. Kirk-Greene",
    imgSrc: alchemist,
    description: "A comprehensive study of the Emirates of Northern Nigeria.",
  },
  {
    title: "The Ignorant Schoolmaster",
    author: "Jacques Rancière",
    imgSrc: ignorantSchoolmaster,
    description: "Redefined how I view learning and equality.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Reading</h2>
      <p className="reading-intro">These books have influenced my perspective on life.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
