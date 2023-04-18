import React from 'react';
import './estilo.css';

export default function SecaoContato(){
    return(
        <section className='secao-contato' id="contato">
        <div className='limitar-secao'>

                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className='contato-container'>
               
                <div className='contato-conteudo'>
                    <h4>Contato</h4>
                   <div><img src ='./assets/local.png' alt=''/><p>  Nova Iguaçu, RJ</p></div>
                   <div><img src='./assets/telefone.png' alt=''/><p> (21) 9999-9999</p></div>
                   <div><img src='./assets/email.png' alt=''/><p> contato@oticavida.com</p></div>
                </div>
                
                <div className='contato-conteudo'>
                    <h4>Nossas Redes Sociais</h4>
                    <div><img src='./assets/fb.png' alt=''/><p> /OticaVida</p></div>
                    <div><img src='./assets/ig.png' alt=''/><p> @oticavidarj</p></div>
                    <div><img src='./assets/tt.png' alt=''/><p>@oticavidarj</p></div>
                </div>
            </div>
        </div>
        </section>
    )
} 