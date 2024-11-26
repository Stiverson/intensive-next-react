import style from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso(){

    return (
        <div className={style.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estilo udando módulos  css</h1>
        </div>
    )
}