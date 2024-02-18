import { useParams } from "react-router-dom"
import FormEdit from "../FormEdit/FormEdit"
import Topbar from "../Topbar/Topbar"
import { useEffect, useState } from "react";
import axios from "axios";


const EditArticle = () => {
  const [editValue, setEditValue] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/articles/${id}`)
      .then(response => {
        setEditValue(response.data.data);
        console.log(editValue)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className="HJ_edit-article  HJ_container ">
        <Topbar title="Blogs / New Article"/>
        <FormEdit
        Data = {editValue}
        />
    </div>
  )
}

export default EditArticle