const About = () => {
  return (
<section className="about" id="about">
  <div className="about-text">
    <h2>About Me</h2>
    <p>
      I am a 16-year-old Frontend Developer with a strong passion for building
      modern, responsive, and user-friendly web applications. I work mainly
      with React and enjoy turning ideas into clean and functional interfaces.
    </p>
    
    <p>I focus on writing well-structured and maintainable code, building reusable
components, and ensuring that applications perform smoothly across different
devices and screen sizes. I am constantly learning new frontend technologies
and improving my skills by working on real projects and practicing every day.</p>
  </div>

  <img
    src="/profile.jpg"
    alt="Profile"
    className="about-img"
  />
</section>

  );
};

export default About;
