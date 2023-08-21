import React, { useState } from "react";
import "./Accordion.css";

/**
 * A single accordion item that can be toggled to show or hide its content.
 *
 * @param {Object} props - The properties of the accordion item.
 * @param {string} props.title - The title of the accordion item.
 * @param {string[]} props.items - The list of items to be displayed when the item is open.
 * @returns {JSX.Element} - The accordion item component.
 */
function AccordionItem({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div
        className="accordion-header"
        onClick={toggleAccordion}
        data-testid="accordion-header"
      >
        {title}
        <span className="accordion-icon">{isOpen ? "▼" : "►"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content" data-testid="accordion-content">
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

/**
 * An accordion component that displays a list of accordion items.
 *
 * @returns {JSX.Element} - The accordion component.
 */
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
        "IBM Data Analyst Professional Certificate (in progress)",
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
