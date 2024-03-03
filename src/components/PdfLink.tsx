import "../styles/home.css";

// I don't use this one because you need the cv to open the website in the first place
// So it would be redundant to use a link to the cv again
// Also to avoid publish unnecessary personal information

export default function PdfLink() {
  const pdfUrl = "../../cv.pdf";

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      className="link"
    >
      Hämta CV
    </a>
  );
}
