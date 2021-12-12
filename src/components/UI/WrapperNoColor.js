import classes from './WrapperNoColor.module.css';

const WrapperNoColor = (props) => {
  return (
    <div className={classes["wrapper-no-color"]}>{props.children}</div>
  )
} 

export default WrapperNoColor;