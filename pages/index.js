import { useState } from 'react';

function Home() {
    return (
    <div>
        <h1>Home</h1>
        <div>{Contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
        <div>teste</div>

        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);



function adicionarContador(){
    setContador(contador + 1);



    }

}


export default Home