import SayMyName from "./SayMyName"
import Pessoa from "./Pessoa"
function HelloWorld() {

    const nome = "João Paulo"

        return (
            <div>
                <h1>my first component</h1>
                <SayMyName nome="João"/>
                <SayMyName nome="Vitor"/>
                <SayMyName nome={nome}/>
                <Pessoa nome="João" idade="20" profissao="DBA" foto="https://via.placeholder.com/150"/>
            </div>

        )

}

export default HelloWorld