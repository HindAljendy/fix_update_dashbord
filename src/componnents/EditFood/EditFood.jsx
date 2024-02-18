import { useEffect, useState } from "react";
import FormEdit_Food from "../FormEditFood/FormEditFood"
import Topbar from "../Topbar/Topbar"
import { useParams } from "react-router-dom";
import axios from "axios";

const EditFood = () => {
  const [editValue, setEditValue] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/foods/${id}`)
      .then(response => {
        setEditValue(response.data.data);
        console.log(editValue)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className="HJ_container ">
    <Topbar title="Food / New Food"/>
    <FormEdit_Food
     Data = {editValue}
    />
    

</div>
  )
}

export default EditFood
