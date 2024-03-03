import Header from "../components/ui/Header";
import "../styles/home.css";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="background">
      <Header />
      <section className="contact-card">
        <h1 style={{ marginBottom: "24px" }}>Title</h1>
        <div className="contact-items">
          <p>Mail:</p>
          <p>LinkedIn:</p>
          <p>Github:</p>
        </div>
      </section>
    </div>
  );
}
