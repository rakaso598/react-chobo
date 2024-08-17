import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  let [글제목, 글제목변경] = useState(['남자코트추천', '강남 우동맛집', '파이썬독학'])
  let [추천, 추천변경] = useState(0);

  let 글제목정렬 = () => {
    let 정렬된제목 = [...글제목].sort((a, b) => a.localeCompare(b))
    글제목변경(정렬된제목);
  };

  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }




  return (
    <div className="App">
      <div className="black_nav">
        <h4>MyReactBlog</h4>
      </div>

      <button onClick={() => {
        글제목정렬();
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy_2 = [...글제목]; // 화살표를 별개의 복사본으로 만듬 (shallow copy)
        copy_2[0] = '여자코트추천';
        글제목변경(copy_2)

      }}>글제목변경</button>

      <button className="modal_1" onClick={() => setShowModal(true)}>Click to learn more</button>



      <div className="list">
        <h4>{글제목[0]} <span onClick={() => 추천변경(추천 + 1)}>★</span>{추천}</h4>
      </div>
      <p>2월 17일 발행</p>

      <div className="list">
        <h4>{글제목[1]} <span onClick={() => 추천변경(추천 + 1)}>★</span>{추천}</h4>
      </div>
      <p>2월 17일 발행</p>

      <div className="list">
        <h4>{글제목[2]} <span onClick={() => 추천변경(추천 + 1)}>★</span>{추천}</h4>
      </div>
      <p>2월 17일 발행</p>

      <Modal></Modal>

    </div>
  );
}


function Modal() {
  return (
    <div className="Modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}




export default App;
