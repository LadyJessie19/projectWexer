import { useState } from "react";
import "../styleModals.css";
import RichTextBox from "../../reusable/TextBox";

function ModalNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('Faça suas anotações')

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleModal}>Anotações</button>
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
            <div>
              <h2>Anotações Pessoais</h2>
              <button onClick={handleModal}>&times;</button>
            </div>
            <div>
              <div>
            <RichTextBox value={text} onChange={setText} />
            </div>
              <div>
                  <button onClick={handleModal}>Cancelar</button>
                  <button>Criar</button>
              </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalNotes;