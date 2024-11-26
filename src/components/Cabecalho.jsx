export default function Cabecalho(props){
//props somente leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}