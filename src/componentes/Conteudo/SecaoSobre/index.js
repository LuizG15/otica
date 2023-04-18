import React from 'react';
import './estilo.css';

export default function SecaoSobre(){ 
    return(
        <section id="sobre" className='secao-sobre'>
            <div className='limitar-secao'>
              <div className='container-cards'>
                    <h4>QUEM SOMOS NÓS?</h4>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao 
                    público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>  
                <img src='./assets/loja.png' alt=''/>
                <div className='card'>
                    <h4>Nossas Filiais</h4>
                    <p> Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className='card'>
                    <h4>ATENDIMENTO FLEXÍVEL</h4>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div> 
                <img src='./assets/atendimento.png' alt=''/>
            </div>
            </div>
            
        </section>
    );
}