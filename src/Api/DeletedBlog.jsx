import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardDelete from '../componnents/CardDelete/CardDelete';

function DeletedBlogArticle() {
  const [DeletArticle, setDeletArticle] = useState([]);
  const [chosingLang , setchosingLang] = useState('en')

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {

        const config = {
            headers: {
              'Accept': 'application/json',
              'language': chosingLang,
              'Authorization': token,
            }
          };

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/deletedArticles', config);
        setDeletArticle(response.data.data)
        console.log(DeletArticle[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [chosingLang]);
    
  const changeLanguage = (newLanguage) => {
    setchosingLang(newLanguage); // تغيير قيمة المتغير عند النقر على الزر
  };
  return (
    <div className='ApiDeletedArticle'>
      {DeletArticle.map(item => (
        <div key={item.id}>
         <CardDelete
            id = {item.id}
            image = {item.images[0].image} 
            Title = {item.title}
            summary = {item.summary}
            description = {item.description}
            Tags = {item.tags[0]}
            />
        </div>
        
      ))
      }
      <button onClick={() => changeLanguage('ar')}>AR</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}

export default DeletedBlogArticle;


