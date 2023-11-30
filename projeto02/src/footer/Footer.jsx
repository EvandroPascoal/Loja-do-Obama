import "./Footer.css"

function Footer (){

    return (
        <footer>
  <div className="newsletter">
    <h3>Newsletter</h3>
    <p>Receba nossas promoções por e-mail</p>
    <form action="" method="post">
      <input type="text" name="" id="" placeholder="Seu nome" />
      <input type="text" name="" id="" placeholder="Seu e-mail" />
      <button>Cadastrar</button>
    </form>
  </div>
  <p className="rodape"> © NodeShop - Todos os direitos reservados </p>
</footer>
    )


}

export default Footer