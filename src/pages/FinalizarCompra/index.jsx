import "./index.css";

const FinalizarCompra = () => {
  return (
    <>
      <h1>Finalizar Compra</h1>
      <div className="container">
        <div className="esquerda">
          <div className="info-pessoal">
            <h6>Informações Pessoais</h6>
            <div className="borda"></div>
            <label htmlFor="nome">Nome Completo *</label>
            <input type="text" placeholder="Insira seu nome" />
            <label htmlFor="=cpf">CPF *</label>
            <input type="text" placeholder="Insira seu CPF" />
            <label htmlFor="email">E-mail *</label>
            <input type="text" placeholder="Insira seu email" />
            <label htmlFor="celular">Celular *</label>
            <input type="text" placeholder="Insira seu celular" />
          </div>
          <div className="info-entrega">
            <h6>Informação de Entrega</h6>
            <div className="borda"></div>
            <label htmlFor="endereco">Endereço *</label>
            <input type="text" placeholder="insira seu endereço" />
            <label htmlFor="bairro">Bairro *</label>
            <input type="text" placeholder="insira seu bairro" />
            <label htmlFor="cidade">Cidade *</label>
            <input type="text" placeholder="insira sua cidade" />
            <label htmlFor="cep">CEP *</label>
            <input type="text" placeholder="insira seu CEP" />
            <label htmlFor="">Complemento</label>
            <input type="text" placeholder="insira complemento" />
          </div>
          <div className="info-pagamento">
            <h6>Informação de Pagamento</h6>
            <div className="borda"></div>
            <label htmlFor="pag">Forma de Pagamento</label>
            <div className="inputRadio">
              <input type="radio" id="radio1" />
              Cartão de Crédito
              <input type="radio" id="radio2" />
              Boleto Bancário
            </div>
            <label htmlFor="nome-cart">Nome do Cartão</label>
            <input
              type="text"
              id="nome-cart"
              placeholder="Insira o nome do Cartão"
            />
            <div className="input50">
              <div>
                <label htmlFor="Ncartao">Data o Número do Cartão</label>
                <input
                  type="text"
                  id="Ncartao"
                  placeholder="Insira o número do Cartão"
                />
              </div>
              <div>
                <label htmlFor="Vcartao">Data de validade do Cartão</label>
                <input
                  type="text"
                  id="Vcartao"
                  placeholder="Insira a validade do Cartão"
                />
              </div>
            </div>
            <label htmlFor="cvv">CVV </label>
            <input type="text" id="cvv" placeholder="CVV*" />
          </div>
          <div className="finalizar-compra">
            <h6>Finalizar Compra</h6>
            <div className="borda"></div>
            <div className="total">
              <h3>Total</h3> <p>R$ 219,00</p>
            </div>
            <p>ou 10x de R$ 21,00 sem juros</p>
            <button> Realizar Pagamento</button>
          </div>
        </div>
      
        <div className="direita">
        <div className="resumo">
            <h2>RESUMO</h2>
            <div className="borda2"></div>
            <div className="img">
            <div className="image">
                <img
                src="src/pages/FinalizarCompra/img/Group 53617 (1).png"
                alt=""
                />
            </div>
            <div className="info-img">
                <h4>Tênis Nike Revolution 6 Nexr Nature Masculino</h4>
            </div>
            </div>
            <div className="borda2"></div>
            <div className="s">
            <p>Subtotal:</p>
            <h6>R$ 219,00</h6>
            </div>
            <div className="f">
            <p>Frete:</p>
            <h6>R$ 0,00</h6>
            </div>
            <div className="d">
            <p>Desconto:</p>
            <h6>R$ 30,00</h6>
            </div>
            <div className="fundo">
            <div className="total-resumo">
                <h2>Total</h2>
                <p>R$ 219,00</p>
            </div>
            <p id="p">ou 10x de R$ 21,00 sem juros</p>
            </div>
            <button>Realizar Pagamento</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default FinalizarCompra;
