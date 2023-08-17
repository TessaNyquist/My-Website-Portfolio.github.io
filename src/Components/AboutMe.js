import "./AboutMe.css"
import TessaBanner from "../Images/Tessa-Banner.png"
import Figure from 'react-bootstrap/Figure';

/**
 * This is a function that creates a card that displays an image of me and my bio.
 * 
 * @returns a Card that displays my bio and photo.
 */
function AboutMe() {
    let bio = "A native Northern Virginian, I completed my B.A. in political science and B.S. in computer science from James Madison University (JMU) in 2022, and received the NSA Information Systems Security Professionals Certification.  While attending JMU, I assisted fellow students navigate the university’s disciplinary process while I served on the executive board of Student  Defenders. Currently, I am serving as a legal assistant at an employment law firm in Washington, D.C., where I assist prospective clients in navigating the firm’s intake process, while leveraging my background in computer science to automate processes. I am passionate about serving back in the community I grew up in and is interested in pursuing opportunities in the tech industry in the Washington, D.C. metro.";
    return (
        <div className="AboutMe">
          <Figure>
            <Figure.Image
              src={TessaBanner}
              className="App-image" // Add the class to the image
              alt="Tessa Banner"
            />
            <Figure.Caption> {bio} </Figure.Caption>
          </Figure>
        </div>
      );
    }
    

export default AboutMe;