import './App.css';
import './styles/reset.css';
import { useState} from 'react';

import {makeRequest} from './api/api'
import SideMenu from './components/SideMenu/Sidemenu'
import ChatMessage from './components/ChatMessage/ChatMessage'

const preMessage =
  "Atue como professor, elabore questões referentes a matéria abaixo para um processo seletivo, seguindo as Regras que são elabore perguntas buscando definições e conceitos de cada conteúdo de cada item na internet - elabore a pergunta, mostre DUAS as alternativas e aponte a alternativa da resposta correta - Inicie cada questão sobre legislação, indicando a norma ou lei e seu título, o artigo, o parágrafo, a letra, quando existirem, a que se refere a pergunta - Inicie cada questão sobre conhecimentos gerais, indicando a área de conhecimento, tópico ou conceito, tema e subtema quando existirem, a que se refere a pergunta";

function App() {

  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message:"Questões de provas"
  }])


  async function handleSubmit(e) {
    e.preventDefault();
    const userMessage = `${preMessage} ${input}`;
    try {
      console.log('Sending request:', userMessage);
      let response = await makeRequest({ prompt: userMessage });
      console.log('Response received:', response);
  
      response = response.data.split('\n').map(line => <p>{line}</p>);
  
      setChatLog([
        ...chatLog,
        {
          user: 'me',
          message: input,
        },
        {
          user: 'gpt',
          message: response,
        },
      ]);
      setInput("");
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  }

  return (
    <div className='App'>

      <SideMenu></SideMenu>

      <section className='chatbox'>

          <div className='chat-log'>
            {chatLog.map((message, index)=>(
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input placeholder="Mensagem para ChatGPT…"
                rows='1'
                className='chat-input-textarea'
                value={input}
                onChange={e =>setInput(e.target.value)}
              >
              </input>
            </form>
          </div>
      </section>

    </div>
  );
}

export default App;
