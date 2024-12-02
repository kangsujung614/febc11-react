import PropTypes from "prop-types";

function Link( {children, to} ){
  const handleClick = e => {
    // 브라우저의 기본 동작을 제거
    e.preventDefault();
    // (state, title, url)
    window.history.pushState(null, '', e.target.pathname);
  }

  return (
    <a href={ to } onClick={ handleClick }>{children}</a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
}

export default Link;