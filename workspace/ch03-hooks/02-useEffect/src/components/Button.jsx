import PropTypes from 'prop-types';
import './Button.css';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string, // 기본값을 지정하였으므로 필수가 아님
  onClick: PropTypes.func,
  color: PropTypes.string,
}

export default function Button({ children, type="button", onClick: clickHandler, color }){
  return <button className="rounded-button" style={{ backgroundColor: color }} type={ type } onClick={ clickHandler }>{ children }</button>
}