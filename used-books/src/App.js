import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './Doc/testData.json';



// 기본적인 서버와의 연결을 위한 테스트 컴포넌트 없이 일단 app에서 테스트 후 분리
function App() {

  //const [data, setData] = useState({ data: [] });

  // 서버에서 데이터 받지 않으면 loading 되게끔..
  //const [loading, setLoading] = useState(true);

  //console.log(api);
  // useEffect(() => {

  //   const apiRequest = async () => {
  //     const axiosRequest = await axios(
  //       './testData.json'
  //     );
  //     console.log(axiosRequest)
  //     setData(axiosRequest.data);
  //     setLoading(false)
  //   }
  //   apiRequest();
  // }, []);




  // 서버에서 데이터 받지 않으면 loading 되게끔..
  //if (loading) return <div>Loading...</div>
  //console.log(data);
  console.log(api);

  return (
    <>
      {api.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          <h5>{item.isbn}</h5>
          {/* 이미지 링크와 새 창에서 열기 */}
          <a href={item.link} target='_blank'>
            <img src={item.img} width='300' height='250' alt={item.title} />
          </a>
          <h2>{item.priceText}</h2>
          <h2>{item.price}</h2>
        </div>
      ))}
      {/* hello world */}

    </>
  )
}

export default App;
