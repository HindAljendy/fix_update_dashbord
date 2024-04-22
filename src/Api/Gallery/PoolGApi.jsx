import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ZHPhotos from '../../componnents/ZH_Photos/ZHPhotos';

export default function PoolGApi({start,end}) {

    const [RestaurantPHoto, setRestaurantPHoto] = useState([]);
    const [chosingFoodKind, setchosingFoodKind] = useState('Pool')

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const config = {
                    headers: {
                        'Accept': 'application/json',
                    }
                };

                const response = await axios.get(`http://127.0.0.1:8000/api/images?category=${chosingFoodKind}`, config);
                setRestaurantPHoto(response.data.data);
                console.log(RestaurantPHoto);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData2();
    }, []);

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
            <div className='zh-gallery-dashboard'>
                {RestaurantPHoto.slice(start, end).map(item => (
                    <div key={item.id}>
                        <ZHPhotos
                        img11={item.image}
                        />
                    </div>
                ))
                }
            </div>
        </>
    )
}
