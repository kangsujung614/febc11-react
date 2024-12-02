import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
}

function Pagination({totalPages, currentPage=1}){
  let pageList = [];
  const [searchParams] = useSearchParams();
  for(let page=1; page<=totalPages; page++){
    searchParams.set('page', page);
    let search = searchParams.toString();

    pageList.push(<li key={page} className={currentPage === page ? "active": ""}><Link to={`/list?${search}`}>{page}</Link></li>);
  }
  return(
    <div className="pagination">
    <ul>
      { pageList }
    </ul> 
    </div>
  )
}

export default Pagination;