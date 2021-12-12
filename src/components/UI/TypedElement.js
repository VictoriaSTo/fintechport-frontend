import React from 'react';
import Typed from 'typed.js';

import classes from './TypedElement.module.css';
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

const TypedReactHook = () => {
	const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'opportunity',
        'investment',
        'solution'
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      backDelay: 900
    };
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={classes.wrap}>
      <h1>We help you find the best <br/><span ref={el} className={classes.option} /></h1>
    </div>
  );
}

export default TypedReactHook;