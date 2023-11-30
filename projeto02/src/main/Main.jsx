import Patrick333 from '../assets/loja.jpg'

import './Main.css'

function Main (){
    return (

<main className="principal">
  <section className="artigo">
    <article className="sobre">
      <h2>Sobre Nós</h2>
      <img
        src={Patrick333}
        alt="Casal formado por homem e mulher de cor calcasiana, ambos de estatura mediana, homem com cabelo preto e camisa social azul clara e mulher com cabelo loiro, com camisa social azul clara e saia cinza. Ambos estão abraçados próximo de uma bancada com diversos computadores. Em frente encontra-se um vendedor de cor branca, com cabelo grisalho e camisa social branca."
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea a voluptas
        totam, rerum quis accusamus quidem corporis dolor aut id voluptate,
        cupiditate molestias velit? Blanditiis aspernatur est at laborum quasi.
      </p>
      <p>
        Quasi magni dolorum asperiores architecto repudiandae voluptates
        inventore cupiditate voluptas necessitatibus facilis libero explicabo,
        sequi animi. Nemo et impedit alias, voluptates mollitia veniam
        perspiciatis tempora saepe, animi, eaque reprehenderit consequuntur.
      </p>
      <p>
        Quasi, amet. Quidem tempora tempore mollitia illum aliquid fuga.
        Repudiandae animi suscipit alias quas minus molestiae totam mollitia
        iusto aut accusantium doloremque aperiam ab dignissimos, at ipsa
        necessitatibus placeat quibusdam.
      </p>
      <p>
        Et numquam dolore placeat doloribus porro delectus ab cupiditate aliquam
        modi ex atque suscipit ullam cumque molestias, mollitia ipsum soluta
        officiis natus necessitatibus amet, minus error incidunt. Numquam, sint
        fugit?
      </p>
      <p>
        Modi corporis iusto a recusandae reprehenderit nam voluptatibus error,
        tempora voluptatem dolor neque vitae voluptate. Nulla accusantium odit
        quidem impedit quia dolorum temporibus illum officia, accusamus placeat
        doloribus odio aspernatur.
      </p>
      <p>
        Ipsa, totam odio. Voluptatem dignissimos asperiores neque, ducimus
        labore animi distinctio molestiae? Libero, non officiis nam placeat
        reprehenderit vitae voluptatem explicabo, numquam magnam repellat
        suscipit temporibus fugiat laborum provident assumenda?
      </p>
      <p>
        Consectetur molestias maxime doloribus molestiae, a rerum tempore
        placeat, minus incidunt sint quas aspernatur qui magnam delectus. Earum
        sint, maxime, eos illum iste quis facere, reiciendis eius ullam tempore
        dignissimos.
      </p>
    </article>
    <aside className="onde-estamos">
      <h2>Onde Estamos</h2>
      <p>
        Senac Lapa Tito - R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29264.9896012361!2d-46.71241496471107!3d-23.52805289668444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1692633455088!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <h2>Contatos</h2>
      <ul>
        <li>
          <i className="fa-solid fa-phone" /> (11)2888-5500
        </li>
        <li>
          <i className="fa-brands fa-whatsapp" /> (11)94002-8922
        </li>
        <li>
          <i className="fa-solid fa-envelope" /> rodrigosantosweb@gmail.com
        </li>
      </ul>
    </aside>
  </section>
</main>

    )
}
export default Main