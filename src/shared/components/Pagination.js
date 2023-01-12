import React from "react"
import ReactPaginate from "react-paginate"

export const Pagination =  ({ handlePageClick, pageInfo }) =>  {
  return (
    <div className="  flex justify-end ">
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={(pageInfo?.total_pages + 1)}
        previousLabel='<'
        // renderOnZeroPageCount={null}
        containerClassName=' pagination  '
        pageLinkClassName='page-num  '
        nextLinkClassName='page-num'
        previousLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </div>
  )
}

