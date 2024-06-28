import React from "react";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import GenresDropdown from "./components/GenresDropdown";
import "./App.css";

const App = () => {
  const apiKey = "363c0188";

  const harryPotterIds = [
    "tt0241527", // Philosopher's Stone
    "tt0295297", // Chamber of Secrets
    "tt0304141", // Prisoner of Azkaban
    "tt0330373", // Goblet of Fire
    "tt0373889", // Order of the Phoenix
    "tt0417741", // Half-Blood Prince
    "tt0926084", // Deathly Hallows: Part 1
    "tt1201607", // Deathly Hallows: Part 2
  ];

  const lotrIds = [
    "tt0120737", //The Fellowship of the Ring
    "tt0167261", //The Two Towers
    "tt0167260", //The Return of the King
    "tt0903624", //The Hobbit: An Unexpected Journey
    "tt1170358", //The Hobbit: The Desolation of Smaug
    "tt2310332", //The Hobbit: The Battle of the Five Armies
  ];

  const starWarsIds = [
    "tt0076759", //Episode IV - A New Hope
    "tt0080684", //Episode V - The Empire Strikes Back
    "tt0086190", //Episode VI - Return of the Jedi
    "tt0120915", //Episode I - The Phantom Menace
    "tt0121765", //Episode II - Attack of the Clones
    "tt0121766", //Episode III - Revenge of the Sith
    "tt2488496", //Episode VII - The Force Awakens
    "tt2527336", //Episode VIII - The Last Jedi
    "tt2527338", //Episode IX - The Rise of Skywalker
  ];

  return (
    <div className="App">
      <CustomNavbar />
      {/* <div className="d-flex ">
        TV Shows <GenresDropdown />
      </div> */}
      <div className="container-fluid px-4">
        <MovieGallery title="Harry Potter" imdbIds={harryPotterIds} apiKey={apiKey} />
        <MovieGallery title="The Lord of the Rings" imdbIds={lotrIds} apiKey={apiKey} />
        <MovieGallery title="Star Wars" imdbIds={starWarsIds} apiKey={apiKey} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
