import styles from '../../Styles/About.module.css';

const About = () => {
  return (
    <>
      <header>
        <h1>About Us</h1>
      </header>

      <main>
        <section>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit a diam venenatis, eu cursus quam gravida. Integer id ligula
            vitae leo efficitur convallis. Proin efficitur dolor nec diam
            bibendum, ut cursus velit accumsan.
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>
            We are a dedicated team of professionals passionate about what we
            do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Nunc euismod libero non massa volutpat, eu tincidunt felis
            aliquet.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products/services to our
            customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis eget dolor quis ex imperdiet facilisis.
          </p>
        </section>
      </main>

      <footer>&copy; 2023 Your Company Name</footer>
    </>
  );
};

export default About;
