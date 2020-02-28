import React from 'react';
import styles from './button.module.css';


const Button = ({type, label, disabled}) => {
return (<button disabled={disabled} className={styles[type]}>{label}</button>  );
}
 
export default Button;