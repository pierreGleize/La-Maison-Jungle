import { useState } from 'react'
import '../styles/Footer.css'



function Footer() {
    const [inputValue, setInputValue] = useState('')
     function handleInput (e){
        setInputValue(e.target.value)
     }
     function handleBlur(){
        if(!inputValue.includes('@')){
            alert("Attention ce n'est pas une adresse email valide, il n'y pas d'@")
        }
     }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :<br/>
                <input type="mail"  
                onChange={handleInput}
                placeholder='entrez votre email'
                value={inputValue}
                onBlur={handleBlur}
               />
                <button onClick={()=>alert(inputValue)}>Alertez moi!</button>
                
    

            </div>
        </footer>
    )
}

export default Footer
