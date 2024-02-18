import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardRoom from '../componnents/CardRoom/CardRoom';

export default function RoomsApi() {
    const [Rooms, setRooms] = useState([]);
    const [chosingLang2 , setchosingLang2] = useState('ar')

    useEffect( () => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'language': chosingLang2,
            }
        };
        // استرجاع البيانات من API باستخدام axios
        axios.get('http://127.0.0.1:8000/api/rooms', config)
            .then(response => setRooms(response.data.data))
            .then(response => console.log(Rooms))
            .catch(error => console.error(error));

    }, [chosingLang2]);

    const changeLanguage2 = (newLanguageid) => {
        setchosingLang2(newLanguageid); // تغيير قيمة المتغير عند النقر على الزر
      };

    return (
        <div>
            {Rooms.map(item => (
                <div key={item.id}>
                    <CardRoom
                    id={item.id}
                    imgroom={item.images[0].image}
                    Title={item.name}
                    samary={item.summary}
                    description={item.description}
                    GuestNumper={item.guest_number}
                    Services='Room Services'
                    prisePerNight={item.price_per_night}
                    />
                </div>

            ))
            }
            <button onClick={() => changeLanguage2('ar')}>AR</button>
            <button onClick={() => changeLanguage2('en')}>EN</button>
        </div>
    )
}
