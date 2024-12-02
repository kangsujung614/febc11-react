import yong from '../../../yong2.js'

function Header(){
  return (
    yong.createElement('header', null, 
      yong.createElement('h1', null, 'Todo List - 컴포넌트 모듈화 :)'), 
      yong.createElement('p', null, '파일 경로: ', 
        yong.createElement('span', { id: 'filepath' }, `ch${document.URL.split('/ch')[1]}`)))
  );
}

export default Header;