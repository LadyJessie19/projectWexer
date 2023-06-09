import { useState } from "react";
import "../styleModals.css";

function ModalAttach() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleModal}>Anexo</button>
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={handleModal}></div>
          <div className="modal">
            <div>
              <h2>Novo Anexo</h2>
              <button onClick={handleModal}>&times;</button>
            </div>
            <div>
              <div>
                <label>
                  Data*
                  <input type="date" />
                </label>
              </div>
              <div>
                <label>
                  Titulo*
                  <input type="text" />
                </label>
              </div>
              <div>
                <label>
                  Descrição*
                  <textarea cols={30} rows={10}>Text</textarea>
                </label>
              </div>
              <div>
                <label>Anexar arquivos*
                <input type="file"/>
                </label>
              </div>
            </div>
              <div>
                <div>
                  <small>*Campos Obrigatórios</small>
                </div>
                <div>
                  <button>Cancelar</button>
                  <button>Criar</button>
                </div>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalAttach;