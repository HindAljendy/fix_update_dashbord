import React, { useEffect, useState } from 'react'
import Topbar from "../Topbar/Topbar"
import EditForm from './../EditExplore/EditForm'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditArticleExplore() {

  const [editValue, setEditValue] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/posts/${id}`)
      .then(response => {
        setEditValue(response.data.data);
        console.log(editValue)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className="HJ_container">
        <Topbar title= "Explore / New Article"/>
        <EditForm Data = {editValue}/>

    </div>
  )
}
