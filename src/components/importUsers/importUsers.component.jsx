import React from "react";
import { api } from "../../services/api";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ImportButon } from "./importUsers.styles";

const ImportUsers = () => {
  // const [file, setFile] = useState();
  // const uploadFile = async e => {
  //   e.preventDefault();
  //   api.post("/client/import", file).then((res)=>{
  //     console.log(res.data)
  //   })
  // }

  const handleUpload = () =>{
    api.post("/client/import").then((res)=>{
      console.log("enviado")
    })
  }

  return (
    <ImportButon>
      {/* <h1>Upload arquivo CSV</h1>
      <form onSubmit={uploadFile}>
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Enviar</button>
      </form> */}
      <h3>Importar arquivo .csv para banco de dados.</h3>
      <Button buttonType={BUTTON_TYPE_CLASSES.gray} onClick={handleUpload}>Carregar customers.csv</Button>
    </ImportButon>
  );
};

export default ImportUsers;
