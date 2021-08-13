
function Pagination(props){

    const paginationPages=(pageCount)=>{
        const paginationArr=Array(pageCount);
        for(let i=0;i<pageCount;i++){
            paginationArr[i]=<li className="page-item" key={i+1}><span className={props.currentPage===i+1?"page-link pagination-custom-item-active cursor-pointer":"page-link pagination-custom-item cursor-pointer"} onClick={()=>props.setCurrentPage(i+1)}>{i+1}</span></li>;
        }
        return paginationArr;
    };

    return(
        <div>
            <nav >
                <ul className="pagination justify-content-center cursor-pointer">
                    <li className={props.currentPage===1?"page-item disabled":"page-item"}>
                    <span className="page-link pagination-custom-item" href="#" aria-label="Previous" onClick={props.decPage}>
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                    </li>
                    {paginationPages(props.pageCount)}
                    <li className={props.currentPage===props.pageCount?"page-item disabled":"page-item"}>
                    <span className="page-link bpagination-custom-item " href="#" aria-label="Next" onClick={props.incPage}>
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;