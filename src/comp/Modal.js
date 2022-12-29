
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
        <Modal.Header closeButton>
          <Modal.Title>Wordle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4>Guess the Wordle in 5 tries.</h4>
        <ul>
          <li>Each guess must be a valid 5-letter word.</li>
          <li>The color of the tiles will change to show you how your guess did.</li>
        </ul>
        <h5><strong>Examples</strong></h5>
        <div className="guess-container">
          <div className="row">
            <div className="col game-tile correct" >W</div>
            <div className="col game-tile" >O</div>
            <div className="col game-tile" >R</div>
            <div className="col game-tile" >D</div>
            <div className="col game-tile" >S</div>
          </div>
          <p><strong>W</strong> is in the correct spot.</p>
          <div className="row">
            <div className="col game-tile" >B</div>
            <div className="col game-tile" >O</div>
            <div className="col game-tile exist" >A</div>
            <div className="col game-tile" >R</div>
            <div className="col game-tile" >D</div>
          </div>
          <p><strong>A</strong> exist in the word but it's in the wrong spot.</p>
          <div className="row">
            <div className="col game-tile" >A</div>
            <div className="col game-tile" >P</div>
            <div className="col game-tile" >P</div>
            <div className="col game-tile wrong" >L</div>
            <div className="col game-tile" >E</div>
          </div>
          <p><strong>L</strong> is not exist in the word.</p>

        </div>
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
