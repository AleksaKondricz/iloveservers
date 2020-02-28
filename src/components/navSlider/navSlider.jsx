import React, {useState} from 'react'
import Zoom from 'react-reveal/Zoom'
import styles from './navSlider.module.css';

const NavSlider = ({elements, previous, next}) => {
   const [cardDisplayed, setCardToDisplay] = useState(0)
   const [showCard, setShowCard] = useState(false);
   
    const incrementCarousel = () => {
        if(cardDisplayed+1 === elements.length){
            setCardToDisplay(0)
            return;
        }
        setCardToDisplay(cardDisplayed + 1);
    }
    const decrementCarosuel = () => {
        if(!cardDisplayed){
            setCardToDisplay(elements.length - 1)
            return;
        }
        setCardToDisplay(cardDisplayed-1)
    }
   



  

    return (
        <div className={styles.carousel} >
           <h4 className={styles.previous} onClick={()=>decrementCarosuel()}  >{previous}</h4>
           
               {elements[cardDisplayed].node}
             <h4 className={styles.next} onClick={()=>incrementCarousel()}>{next}</h4>
        </div>
  );
}
 
export default NavSlider;