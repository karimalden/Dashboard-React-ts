import PerPageDropdown from 'components/PerPageDropdown';
import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather';
import ReactPaginate from 'react-paginate';

export const HandelPagination = ({totalRows,per_page,page,handlePageChange,filterIsApplied,filterPagination}) => {
  return (
    <ReactPaginate
    previousLabel={<ChevronLeft size={15} />}
    nextLabel={<ChevronRight size={15} />}
    breakLabel="..."
    breakClassName="break-me"
    pageCount={totalRows / per_page}
    containerClassName="vx-pagination separated-pagination pagination-center pagination-sm mb-0 mt-2"
    activeClassName="active"
    forcePage={  filterIsApplied ? filterPagination.page - 1 : page - 1 }
    onPageChange={(v) => { if (filterIsApplied) {  filterPagination.handlePageChange(v);} 
     else { handlePageChange(v);} }} 
       />
  )
}



export const HandelPerPage = ({per_page,filterPagination,handlePerPageChange}) => {
  return (
    <PerPageDropdown
    className="custom-dropdown mr-1"
    per_page={per_page}
    handlePerPage={(v) => {
      if(filterPagination){
           filterPagination.handlePageChange(0);
      handlePerPageChange(v);
      filterPagination.handlePerPageChange(v);
      }
      else{
        handlePerPageChange(v);
      }
   
    }}
  />
  )
}

