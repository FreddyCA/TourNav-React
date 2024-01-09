import styled from "styled-components";
import FormContacto from "../components/FormAdmin";
import { useState } from "react";
import PanelAdministrativo from "../components/PanelAdministrativo";
const AdminPanelStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(28, 30, 53);
`;

const AdminPanelContentForm = styled.div`
  width: 1020px;
  padding: 4rem;
  background-color: skyblue;
`;
const AdminPanel = () => {
  const [user, dataUser] = useState("");
  console.log(user);
  return (
    <AdminPanelStyle>
      <AdminPanelContentForm>
        {user ? <FormContacto dataUser={dataUser} /> : <PanelAdministrativo />}
      </AdminPanelContentForm>
    </AdminPanelStyle>
  );
};

export default AdminPanel;
