import SectionTitle from "./SectionTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../styles/style.css";
const Tech = () => {
  const [feShow, setfeShow] = useState(false);
  const [beShow, setbeShow] = useState(false);
  const [cpShow, setcpShow] = useState(false);
  const [bcShow, setbcShow] = useState(false);

  return (
    <>
      <section className="tech_section" id="techstack">
        <SectionTitle
          title="My Tech Stack"
          desc="A list of tools I use and technologies I am proficient with."
        />

        <div className="tech_wrapper">
          {/* <div
            className="techstack"
            // onClick={() => handleShow()}
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fab fa-react fa-8x"></i>
            
          </div> */}

          <div
            className="techstack"
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
            onClick={() => setfeShow(true)}
          >
            <i style={{ size: 24 }} className="fab fa-react fa-8x"></i>
          </div>

          <div
            className="techstack"
            onClick={() => setbeShow(true)}
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fa fa-database fa-8x"></i>
          </div>

          <div
            className="techstack"
            onClick={() => setbcShow(true)}
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fa fa-btc fa-8x"></i>
          </div>

          <div
            className="techstack"
            onClick={() => setcpShow(true)}
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fas fa-code fa-8x"></i>
          </div>
        </div>
      </section>

      <Modal
        className="techmodal"
        size="lg"
        show={feShow}
        onHide={() => setfeShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Frontend Tech Stack
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt="skill" src="https://img.icons8.com/color/48/000000/html-5--v1.png" /> &nbsp;
          <img alt="skill"  src="https://img.icons8.com/color/48/000000/css3.png" />&nbsp;
          <img  alt="skill" src="https://img.icons8.com/color/48/000000/javascript--v1.png" />&nbsp;
          <img  alt="skill" src="https://img.icons8.com/color/48/000000/bootstrap.png" />&nbsp;
          <img  alt="skill" src="https://img.icons8.com/office/48/000000/react.png" />&nbsp;
          <img  alt="skill" src="https://img.icons8.com/color/48/000000/material-ui.png" />&nbsp;
        </Modal.Body>
        <Modal.Footer>
          <div className="btn-closer" onClick={() => setfeShow(false)}>
            Close
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        className="techmodal"
        size="lg"
        show={beShow}
        onHide={() => setbeShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Backend Tech Stack{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt="skill"  src="https://img.icons8.com/external-prettycons-flat-prettycons/48/000000/external-php-web-and-seo-prettycons-flat-prettycons.png" />&nbsp;
          <img alt="skill"  src="https://img.icons8.com/color/48/000000/sql.png" />&nbsp;
          <img  alt="skill" src="https://img.icons8.com/color/48/000000/mongodb.png" />&nbsp;
        </Modal.Body>
        <Modal.Footer>
          <div className="btn-closer" onClick={() => setbeShow(false)}>
            Close
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        className="techmodal"
        size="lg"
        show={bcShow}
        onHide={() => setbcShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Web3 Tech Stack{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span
            class="iconify"
            data-icon="simple-icons:solidity"
            data-width="48"
            data-height="48"
          ></span>&nbsp;
          <img  alt="skill" src="https://img.icons8.com/color/48/000000/anchor.png" />&nbsp;
        </Modal.Body>
        <Modal.Footer>
          <div className="btn-closer" onClick={() => setbcShow(false)}>
            Close
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        show={cpShow}
        onHide={() => setcpShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Programming Tech Stack{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img  alt="skill" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>&nbsp;
        <img  alt="skill" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"/>&nbsp;
        <img alt="skill"  src="https://img.icons8.com/color/48/000000/python--v1.png"/>&nbsp;

        </Modal.Body>
        <Modal.Footer>
          <div className="btn-closer" onClick={() => setcpShow(false)}>
            Close
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tech;
