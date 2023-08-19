import React, { useState } from "react";
import "./Accordion.css";

function AccordionItem({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className="accordion-icon">{isOpen ? "▼" : "►"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Accordion() {
  const items = [
    {
      title: "Educational Background",
      items: [
        "Bachelor of Arts in Political Science",
        "Bachelor of Science in Computer Science",
      ],
    },
    {
      title: "Certifications",
      items: [
        "National Security Agency (NSA) Certification",
        "IBM Data Analyst Professional Certificate",
      ],
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} items={item.items} />
      ))}
    </div>
  );
}

export default Accordion;

