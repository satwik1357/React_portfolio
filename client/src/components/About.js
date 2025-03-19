import React from "react";
import profilePic from "../assets/My pic.jpg";

const About = () => {
  return (
    <section id="about" className="about-section" style={styles.section}>
      <img src={profilePic} alt="Profile" style={styles.image} />
      <div style={styles.text}>
        <h2>About Me</h2>
        <p>
        Hey! I'm Satwik Muddada, a curious learner and tech enthusiast currently studying Electronics and Communication Engineering at NIT Meghalaya and pursuing a B.S. in Data Science from IIT Madras. I love building cool stuff with code — from web apps to data-driven projects — and I’m always exploring how tech can make life easier and more efficient. I also enjoy combining creativity with logic. Whether it's developing a new feature or analyzing data, I’m all about learning and growing through hands-on experience.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    gap: "2rem",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  text: {
    maxWidth: "600px",
  },
};

export default About;
