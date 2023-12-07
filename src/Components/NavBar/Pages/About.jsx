import styles from '../../Styles/About.module.css';

const About = () => {
  return (
    <>
      <main>
        <section className={styles.mission}>
          <div className={styles.content}>
            <h2 className={styles.storyTitle}>Our Mission</h2>
            <p className={styles.paragraph}>
              There's this notion that to grow a business, you have to be
              ruthless. But we know there's a better way to grow. One where
              what's good for the bottom line is also good for customers. We
              believe businesses can grow with a conscience, and succeed with a
              soul — and that they can do it with inbound. That's why we've
              created an ecosystem uniting software, education, and community to
              help businesses grow better every day.
            </p>
          </div>
          <img
            className={styles.picture}
            src="../../../../img/about1.png"
            alt=""
          />
        </section>
        <section>
          <h2>Our Story</h2>
          <div className={styles.mission}>
            <img
              className={styles.picture2}
              src="../../../../img/about2.jpg"
              alt=""
              height={'450px'}
              width={'300px'}
            />
            <div className={styles.content}>
              <p className={styles.paragraph}>
                As fellow graduate students at MIT in 2004, Brian and Dharmesh
                noticed a shift in the way people shop and buy. Consumers were
                no longer tolerating interruptive bids for their attention — in
                fact, they'd gotten really, really good at ignoring them. From
                this shift, a company was born: HubSpot. It was founded on
                "inbound", the notion that people don't want to be interrupted
                by marketers or harassed by salespeople — they want to be
                helped. Today, the inbound movement continues to empower
                businesses around the world to stop interrupting, start helping,
                and return their focus to the customer.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className={styles.footerText}>&copy; 2023 The Saiyans</p>
      </footer>
    </>
  );
};

export default About;
