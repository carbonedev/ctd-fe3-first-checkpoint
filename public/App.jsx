import { useState } from "react"
import { Card } from "./Card"
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colorName, setColorName] = useState()
  const [colorHex, setColorHex] = useState()
  const [formularioErro, setFormularioErro] = useState()
  
  const color = []
  
  const[allColors, setAllColors] = useState(color)
  
  function Erros(){
    
    
    if(colorName === "" || colorHex === ""){
      setContadorErro(1)
    }else{
      
    }
    if(colorName.lenght()<3){
      setContadorErro(1)
    }else{
    }  
    const[contadorErro, setContadorErro] = useState(0)
    
    function addNewColor(event) {
      
      event.preventDefault()
      const newColor = {
        name: colorName,
        hex: colorHex
        
      } 
      
      
      if(contadorErro !== 0){
        setFormularioErro(true)
      }else{
        setFormularioErro(false)
        
        setAllColors([...allColors,newColor])
        setColorName("")
        setColorHex("")
        
      }
      
    }
    
  }
    
    return (
    <div className="App">
     <h1>Cores</h1>
     <form className={formularioErro ? "form-error" : " "} onSubmit ={event => addNewColor(event)}>
      
      <div>
          <label htmlFor="colorName">Nome da Cor</label>
          <input id="colorName" type="text" value={colorName} onKeyUp={Erros()} onChange={event=>setColorName(event.target.value)} />
      </div>

      <div>
          <label htmlFor="colorHex">Cor em hexadecimal</label>
          <input id="colorHex" type="color" value={colorHex} onChange={event=>setColorHex(event.target.value)} />
      </div>

      <button type="submit">Cadastra Cor</button>

     </form>

     {

      formularioErro ? (
        <span>Os campos devem ser preenchidos corretamente</span>
      ): null

     }
      
      <ul className="color-list">
        {
          allColors.map(
            color => {
              return(
                <Card colorData = {color}/>
              )
            }
          )
        }

      </ul>

    </div>
  )
}

export default App