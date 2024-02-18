import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardArticle from '../componnents/CardArticle/CardArticle';

function BlogArticle() {
  const [Article, setArticle] = useState([]);
  const [chosingLang , setchosingLang] = useState('en')


  useEffect(() => {

    const config = {
      headers: {
        'Accept': 'application/json',
        'language': chosingLang,
      }
    };
    // استرجاع البيانات من API باستخدام axios
    axios.get('http://127.0.0.1:8000/api/articles', config)
      .then(response => setArticle(response.data.data))
      .then(response => console.log(Article))
      .catch(error => console.error(error));
      
  }, [chosingLang]);
    
  const changeLanguage = (newLanguage) => {
    setchosingLang(newLanguage); // تغيير قيمة المتغير عند النقر على الزر
  };
  
  return (
    <div className='ApiArticle'>
      {Article.map(item => (
        <div key={item.id}>
         <CardArticle
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

export default BlogArticle;