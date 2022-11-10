import { useState } from "react"
import { Card } from "./Card"
import "./App.scss"
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colorName, setColorName] = useState("")
  const [colorHex, setColorHex] = useState("")
  const [formularioErro, setFormularioErro] = useState(false)

  const color = []
  const[allColors, setAllColors] = useState(color)


  function addNewColor(event) {

    event.preventDefault()
    const newColor = {
      name: colorName.trim(),
      hex: colorHex

    }
      if(colorName === ""){
        setFormularioErro(true)
      }else{  
        setFormularioErro(false)
    
        setAllColors([...allColors,newColor])
        setColorName("")
        setColorHex("")
        
      }
    }

  


  return (
    <div className="App">
     <h1>ADICIONAR NOVA COR</h1>
     <form className={formularioErro ? "form-error" : " "} onSubmit ={event => addNewColor(event) }>
      
      <div>
          <label htmlFor="colorName">Nome da Cor </label>
          <input id="colorName" type="text" minLength="3" value={colorName}onChange={event=>setColorName(event.target.value)} />
      </div>

      <div>
          <label htmlFor="colorHex">Cor em Hexadecimal </label>
          <input id="colorHex" type="color" value={colorHex}onChange={event=>setColorHex(event.target.value)} />
      </div>

      <button type="submit">Cadastra Cor</button>

     </form>

     {
       
       formularioErro ? (
         <span className="msg-error">Por favor, verifique os dados inseridos no formulário</span>
         ): null
         
        }
      <section className="select-color">CORES SELECIONADAS

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
      </section>

    </div>
  )
}

export default App