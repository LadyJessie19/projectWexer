import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "../../SideBar";
import MainBar from "../../MainBar";

import ButtonNewReg from "../../../reusable/Buttons/ButtonNewReg";
import ButtonTinyEdit from "../../../reusable/Buttons/ButtonsTiny/ButtonTinyEdit";

import "../style.css";
import SearchInputWexer from "../../../reusable/SearchInputWexer";
import { getPatient } from "../../../services/functions";

const PatientsList = () => {
  const patientObj = {
    name: '',
    birthdate: '',
    profession: '',
    schooling: '',
    personalAnnotations: '',
    _id: ''
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const [patient, setPatient] = useState(patientObj);

  const handleModal = () => {
    setMenuOpen(!menuOpen);
  };

  const getUser = async () => {
    const id = localStorage.getItem("patient_id");
    if(id === null){
      console.log("Usuário não encontrado")
      return;
    }
    const currentPatient = await getPatient(id);
    return setPatient(currentPatient.data);
  };
  
  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <>
      <MainBar menuHandle={handleModal} />
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="divPatientsScreen">
        <div id="sectionHeader">
          <div>
            <Link to="/registro-paciente">
              <ButtonNewReg lightTheme={false} />
            </Link>
          </div>
          <div>
            <SearchInputWexer />
          </div>
        </div>
        <div id="sectionBody">
          <table>
            <tr>
              <th>
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th className="colorBlue">Código</th>
              <th className="colorBlue">Nome</th>
              <th className="colorBlue">Profissão</th>
              <th className="colorBlue">Guia</th>
              <th className="colorBlue">Prontuário</th>
              <th>&nbsp;</th>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>{patient._id}</td>
              <td>{patient.name}</td>
              <td>{patient.profession}</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <Link to="/paciente-info">
                  <ButtonTinyEdit />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>55</td>
              <td>Ana Clara</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <Link to="/paciente-info">
                  <ButtonTinyEdit />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>2452</td>
              <td>Cesar Pinheiro</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <Link to="/paciente-info">
                  <ButtonTinyEdit />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>42</td>
              <td>Carlos Eduardo</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <Link to="/paciente-info">
                  <ButtonTinyEdit />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>2248</td>
              <td>Silvia Moreira</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <Link to="/paciente-info">
                  <ButtonTinyEdit />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>24</td>
              <td>Wander Martins</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <Link to="/paciente-info">
                  <ButtonTinyEdit />
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default PatientsList;
