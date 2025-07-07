import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "../assets/resume.pdf";
import "../styles/Resume.css";
import { FaDownload } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        <h1 className="resume-title">My Resume</h1>

        <a href={resumePDF} download="Shaun_Richter_Resume.pdf">
          <button className="download-button">
            <FaDownload /> &nbsp; Download
          </button>
        </a>

        <div className="pdf-viewer">
          <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                scale={1.6}
              />
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;