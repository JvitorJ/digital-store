
import './index.css'

const FinalizarCompra = () => {
    return(
        <>
            <h1>Finalizar Compra</h1>
            <div className='info-pessoal'>
                <h6>Informações Pessoais</h6>
                <div className="borda"></div>   
                <label htmlFor="nome">Nome Completo *</label>
                <input type="text"  placeholder='Insira seu nome'/>
                <label htmlFor="=cpf">CPF *</label>
                <input type="text"  placeholder='Insira seu CPF'/>
                <label htmlFor="email">E-mail *</label>
                <input type="text"  placeholder='Insira seu email'/>
                <label htmlFor="celular">Celular *</label>
                <input type="text"  placeholder='Insira seu celular'/>
            </div>
            <div className="info-entrega">
                <h6>Informação de Entrega</h6>
                <div className="borda"></div>
                <label htmlFor="endereco">Endereço *</label>
                <input type="text" placeholder='insira seu endereço'/>
                <label htmlFor="bairro">Bairro *</label>
                <input type="text" placeholder='insira seu bairro'/>
                <label htmlFor="cidade">Cidade *</label>
                <input type="text" placeholder='insira sua cidade'/>
                <label htmlFor="cep">CEP *</label>
                <input type="text" placeholder='insira seu CEP'/>
                <label htmlFor="">Complemento</label>
                <input type="text" placeholder='insira complemento'/>
            </div>
            <div className="info-pagamento">
                <h6>Informação de Pagamento</h6>
                <div className="borda"></div>
                    <label htmlFor="pag">Forma de Pagamento</label>
                <div className="inputRadio">
                    <input type="radio" id='radio1' />Cartão de Crédito
                    <input type="radio" id='radio2' />Boleto Bancário
                </div>
                <label htmlFor="nome-cart">Nome do Cartão</label>
                <input type="text" id='nome-cart' placeholder='Insira o nome do Cartão'/>
                <div className='input50'>
                    <label htmlFor="Ncartao">Data o Número do Cartão</label>
                    <input type="text" id='Ncartao' placeholder='Insira o número do Cartão'/>
                    <label htmlFor="Vcartao">Data de validade do Cartão</label>
                    <input type="text" id='Vcartao' placeholder='Insira a validade do Cartão'/>
                    <label htmlFor="cvv">CVV </label>
                    <input type="text" id='cvv' placeholder='CVV*'/>
                </div>
            </div>
            <div className="finalizar-compra">
                <h6>Finalizar Compra</h6>
                <div className="borda"></div>
                <div className='total'>
                    <h3>Total</h3> <p>R$ 219,00</p>
                </div>
                <p>ou 10x de R$ 21,00 sem juros</p>
                <button> Realizar Pagamento</button>
            </div>
        </>
    )
}

export default FinalizarCompra