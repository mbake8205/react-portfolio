import React, { useEffect, useState } from "react";

const StarBackground = () => {
  // State to store stars
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars(); // Run once on mount
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resze", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    // Number of stars depends on screen size
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000 // corrected "windows" to "window"
    );

    const newStars = []; // temporary array to hold generated stars

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // unique ID for React key
        size: Math.random() * 3 + 1, // random size (1px to 4px)
        x: Math.random() * 100, // position in % horizontally
        y: Math.random() * 100, // position in % vertically
        opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1 opacity
        animationDuration: Math.random() * 4 + 2, // 2s to 6s animation
      });
    }

    setStars(newStars); // update state with the stars
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // unique ID for React key
        size: Math.random() * 2 + 1, // random size (1px to 4px)
        x: Math.random() * 100, // position in % horizontally
        y: Math.random() * 20, // position in % vertically
        delay: Math.random() * 15, // 0.5 to 1 opacity
        animationDuration: Math.random() * 3 + 3, // 2s to 6s animation
      });
    }

    setMeteors(newMeteors); // update state with the stars
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id} // unique key for React rendering
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            position: "absolute", // ensures correct positioning
            borderRadius: "50%", // makes them circular
            backgroundColor: "white", // star color
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id} // unique key for React rendering
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 5 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
