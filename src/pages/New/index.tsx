import * as S from './styles'

export function New(){
    return (
        <S.Form>
        <form action="" method="post" enctype="multipart/form-data"> 
            <fieldset>
                <label for="info">Informatica</label>
                <input type="checkbox" name="curso[]" id="info" value="info"></input>
                <br></br>
                <label for="edif">Edificações</label>
                <input type="checkbox" name="curso[]" id="edif" value="edif"></input>
                <br></br>
                <label for="meca">Mecatônica</label>
                <input type="checkbox" name="curso[]" id="meca" value="meca"></input>
                <br></br>
                <input type="color" name="cor"></input>
                <br></br>
                <input type="date" name="data"></input>
                <br></br>
                <input type="datetime-local" name="datahora"></input>
                <br></br>
                <input type="email" name="email" placeholder="asdfasd@sdaf.com"></input>
                <br></br>
                <input type="file" name="arquivo"></input>
                <br></br>
                <input type="hidden" name="1"></input>
                <br></br>
                <input type="month" name="mes"></input>
                <br></br>
                <input type="number" name="numero" placeholder="num"></input>
                <br></br>
                <input type="password" name="senha" placeholder="******"></input>
                <br></br>
                <label for="um">1o ano</label>
                <input type="radio" name="ano" value="1" id="um"></input>
                <br></br>
                <label for="dois">2o ano</label>
                <input type="radio" name="ano" value="2" id="dois"></input>
                <br></br>
                <label for="tres">3o ano</label>
                <input type="radio" name="ano" value="3" id="tres"></input>
                <br></br>
                <input type="range" name="porcentagem"></input>
                <br></br>
                <input type="search" name="busca" placeholder="busca"></input>
                <br></br>
                <input type="tel" name="telefone" placeholder="telefone"></input>
                <br></br>
                <input type="text" name="nome" placeholder="nome"></input>
                <br></br>
                <input type="time" name="hora"></input>
                <br></br>
                <input type="url" name="site" placeholder="site"></input>
                <br></br>
                <input type="week" name="semana"></input>
                <br></br>
                <button type="submit">Enviar</button>
                <button type="reset">Limpar</button>
            </fieldset>
        </form>
        </S.Form>
    )
}