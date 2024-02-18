import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FoodCard from '../../componnents/FoodCard/FoodCard';

export default function WesternAPI({start,end}) {

    const [WesternFood, setWesternFood] = useState([]);
    const [chosingLang, setchosingLang] = useState('en')
    const [chosingFoodKind, setchosingFoodKind] = useState('Western Food')

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const config = {
                    headers: {
                        'Accept': 'application/json',
                        // 'language': chosingLang,
                    }
                };

                const response = await axios.get(`http://127.0.0.1:8000/api/foods?category=${chosingFoodKind}`, config);
                setWesternFood(response.data.data);
                console.log(WesternFood);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData2();
    }, [chosingLang]);

    const changeLanguage = (newLanguage) => {
        setchosingLang(newLanguage); // تغيير قيمة المتغير عند النقر على الزر
        if (newLanguage === 'ar') {
            setchosingFoodKind('مأكولات غربية')
        } else {
            setchosingFoodKind('Western Food')
        }
    };

    const data = Array.from({ length: 100 }, (_, index) => index + 1);
    const itemsPerPage = 6;

        const [currentPage, setCurrentPage] = useState(0);
    
        const handlePageClick = ({ selected }) => {
            setCurrentPage(selected);
        };

        const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    
    return (
        <>
            <div className='RH_cards_food_column1'>
                {WesternFood.slice(start, end).map(item => (
                    <div key={item.id}>
                        <FoodCard
                            id={item.id}
                            FoodImage={item.images[0].image}
                            Name={item.title}
                            discription={item.description}
                        />
                    </div>

                ))
                }
            </div>
            <button onClick={() => changeLanguage('ar')}>AR</button>
            <button onClick={() => changeLanguage('en')}>EN</button>

        </>
    )
}
