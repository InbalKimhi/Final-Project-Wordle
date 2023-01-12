
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from '../Providers/ModalContext';

export function Example() {

  const {handleClose,show} = useContext(ModalContext)

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centere
      >
       <Modal.Header id="modalH" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            How to play
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalB">
          <h5>Guess the Wordle in 6 tries.</h5>
          <ul>
            <li>Each guess must be a valid 5-letter word</li>
            <li>The color of the tiles will change to show how close your guess was to the word</li>
          </ul>
          <p id="modalLine">
              <b>Examples</b>
          </p>
          <div id="modalRow">
              <div className="greenTile">W</div>
              <div className="modalTile">O</div>
              <div className="modalTile">R</div>
              <div className="modalTile">D</div>
              <div className="modalTile">S</div>
          </div>
          <p id="modalLine">
              <b>W</b> is in the word and in the right spot.
          </p>
          <div id="modalRow">
              <div className="modalTile">P</div>
              <div className="modalTile">A</div>
              <div className="yellowTile">G</div>
              <div className="modalTile">E</div>
              <div className="modalTile">S</div>
          </div>
          <p id="modalLine">
              <b>G</b> is in the word but not in the right spot.
          </p>
          <div id="modalRow">
              <div className="modalTile">L</div>
              <div className="modalTile">E</div>
              <div className="modalTile">M</div>
              <div className="grayTile">O</div>
              <div className="modalTile">N</div>
          </div>
          <p id="modalLine">
              <b>O</b> is not in the word in any spot.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
