import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardExplore from '../../componnents/CardExplore/CardExplore';

export default function ExploreApiTheNature() {
    const [Explore, setExplore] = useState([]);
    const [chosingLang , setchosingLang] = useState('en')
    const [chosingExploreKind , setchosingExploreKind] = useState('The Nature')
  
  
    useEffect(() => {
      const fetchData2 = async () => {
        try {
          const config = {
            headers: {
              'Accept': 'application/json',
              'language': chosingLang,
            }
          };
          
          const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${chosingExploreKind}`, config);
          setExplore(response.data.data);
          console.log(Explore);
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchData2();
    }, [chosingLang]);
      
    const changeLanguage = (newLanguage) => {
      setchosingLang(newLanguage); // تغيير قيمة المتغير عند النقر على الزر
      if(newLanguage === 'ar')
      {
        setchosingExploreKind('الطبيعة')
      }else
      {
        setchosingExploreKind('The Nature')
      }
    };
    
    return (
      <div className='ApiArticle'>
        {Explore.map(item => (
          <div key={item.id}>
           <CardExplore
           id = {item.id}
            image = {item.images[0].image} 
            Name = {item.title}
            description = {item.description}
            Date = {item.created_at}
        />
          </div>
          
        ))
        }
        <button onClick={() => changeLanguage('ar')}>AR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    );
}
