
//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (

    <main className="card-color">
      <li>
        <div className="card-body">
          <h1>{props.colorData.name}</h1>
          <span>{props.colorData.hex}</span>
        </div>
      </li>
    </main>
  )
}