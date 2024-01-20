import { useState } from 'react';
import './PaginateItems.css'
import Pagination from 'react-bootstrap/Pagination';

const PaginateItems = () => {
    const [currentPage, setCurrentPage] = useState(1);

     const handlePageClick = (data) => {
       setCurrentPage(currentPage);
     };

  return (
    <div className='paginate'>
        <Pagination    className='space_paginate_numbers' >
             <Pagination.Prev  onPageChange={handlePageClick}  /> 
            <Pagination.Item   onPageChange={handlePageClick} >{1}</Pagination.Item>
            <Pagination.Item  onPageChange={handlePageClick}  >{2}</Pagination.Item>
            <Pagination.Ellipsis   onPageChange={handlePageClick}/>
            <Pagination.Item  onPageChange={handlePageClick}>{9}</Pagination.Item>
            <Pagination.Item  onPageChange={handlePageClick}>{10}</Pagination.Item>
            <Pagination.Next  onPageChange={handlePageClick} />
        </Pagination>
       
    </div>
  )
}


export default PaginateItems



