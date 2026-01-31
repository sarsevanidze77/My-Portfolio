function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hi, I’m <span>Andria</span>
        </h1>
        <h2>Front-End Developer</h2>
        <p>I build modern, fast and responsive web interfaces.</p>

        <div className="buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
  <img src="/hero.jpg" alt="Profile" className="hero-img" />
</div>
      
    </section>
  );
}

export default Hero;

