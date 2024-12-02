// 즉시 실행 함수를 사용하여 (객체에 속성을 정의하는 것이 아닌)함수 내부에 코드를 작성한다.
const yong = (() => {
  let _root;
  let _stateValue; // 변수명 앞에 언더바를 붙이면 내부에서만 사용 가능한 프라이빗 변수가 되는 암묵적인 룰이 있음
  // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성해서 반환
  // <button type="button" onclick="handleUp()">+</button>
  // createElement('button', { type: 'button', onclick: 'handleUp()' }, '+');
  const createElement = (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if(attrName.startsWith('on')){
          elem.addEventListener(attrName.toLowerCase().substring(2),value);
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }

    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if(typeof child === 'function'){
        child = child();
      }
      elem.appendChild(child);
    }

    return elem;
  };

  const createRoot = (rootNode) => {
    let _appComponent;
    return {
      // 루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        rootNode.appendChild(appFn());
      },
    };
  };

  // 상태값 관리
  // let [count, setCount] = Yong.useState(10);
  const useState = (initValue) => {
    // 최초(최초 변수는 undefined로 초기화 되므로)에 한번만 initValue 값으로 저장하고 useState가 다시 호출되면 initValue는 무시하고 저장된 값을 사용한다.
    if(_stateValue === undefined){
      _stateValue = initValue;
    }

    // setValue(11);라고 가정하면
    function setValue(newValue){
      const oldValue = _stateValue; // 기존값 10
      _stateValue = newValue; // 새로운 값 11

      // 두 값이 같은지 비교해서 같지 않을 경우에(상태가 변경된 경우) 리렌더링한다.
      if(!Object.js(oldValue, newValue)){

      }
    }
  };

  return { createElement, createRoot, useState };
})();

// const yong = {
//   _root,
//   _stateValue,
//   // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성해서 반환
//   // <button type="button" onclick="handleUp()">+</button>
//   // createElement('button', { type: 'button', onclick: 'handleUp()' }, '+');
//   createElement: (tag, props, ...children) => {
//     // 요소 노드 생성
//     const elem = document.createElement(tag);

//     // 속성 추가
//     if (props) {
//       for (const attrName in props) {
//         const value = props[attrName];
//         if(attrName.startsWith('on')){
//           elem.addEventListener(attrName.toLowerCase().substring(2),value);
//         } else {
//           elem.setAttribute(attrName, value);
//         }
//       }
//     }

//     // 자식 노드 추가
//     for (let child of children) {
//       if (typeof child === "string" || typeof child === "number") {
//         child = document.createTextNode(child);
//       } else if(typeof child === 'function'){
//         child = child();
//       }
//       elem.appendChild(child);
//     }

//     return elem;
//   },

//   // 루트노드를 관리하는 객체를 생성해서 반환
//   // createRoot(document.getElementById('root')).render(App);
//   createRoot: (rootNode) => {
//     return {
//       // 루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
//       render(appFn) {
//         rootNode.appendChild(appFn());
//       },
//     };
//   },

//   // 상태값 관리
//   // let [count, setCount] = Yong.useState(10);
//   useState: (initValue) => {

//   }
// };

export default yong;
