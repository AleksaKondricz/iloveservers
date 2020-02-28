import React,{useState, useEffect} from 'react'
import Glide from '@glidejs/glide'
import styles from './glider.styles.css'

const Glider = ({element='glide', options, children}) => {
   const [slider] = useState(new Glide(`.${element}`, options))
   useEffect(() => {
       slider.mount()

       //subscribe to an event
       slider.on('run.before', (event) => {
           //...do something cool here
       })

       //cleanup when unmounting component
       return ()=>slider.destroy() 
   },[])


 


  return (
      
    <div  className={styles.element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides" style={{ display: 'flex' }}>
        {children.map((slide, index) => {
                            return React.cloneElement(slide, {
                                key: index,
                                className: `styles.${slide.props.className} glide__slide`
                            })
                        })
                    }
        </ul>
      </div>
    </div>
  )
}

export default Glider;