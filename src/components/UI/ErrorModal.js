import Card from './Card';
import classes from "./ErrorModal.module.css";
import Button from './Button';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.closeModal} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.closeModal}>Okay</Button>
      </footer>
    </Card>
  )
};



const ErrorModal = (props) => {

  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} closeModal={props.closeModal} />, document.getElementById('overlay-root'))}
    </>
  );
};

export default ErrorModal;
