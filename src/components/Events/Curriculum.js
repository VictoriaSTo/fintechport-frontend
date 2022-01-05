import Modal from "../UI/Modal";
import classes from "./Curriculum.module.css";
import curriculum from "../../assets/grad/9.png";

const Curriculum = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["curriculum"]}>
        <h2 className={classes["curriculum__title"]}>Curriculum</h2>
        <img alt="grad curriculum" src={curriculum} className={classes["curriculum__image"]}/>
      </div>
    </Modal>
  )
};

export default Curriculum;