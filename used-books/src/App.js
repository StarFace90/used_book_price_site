import React, { useState, useEffect } from 'react';
import axios from 'axios';



// 기본적인 서버와의 연결을 위한 테스트 컴포넌트 없이 일단 app에서 테스트 후 분리
function App() {

  const [data, setData] = useState({ data: [] });

  // 서버에서 데이터 받지 않으면 loading 되게끔..
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const apiRequest = async () => {
      const axiosRequest = await axios(
        'http://localhost:5000/'
      );
      console.log(axiosRequest)
      setData(axiosRequest.data);
      setLoading(false)
    }
    apiRequest();
  }, []);

  // 서버에서 데이터 받지 않으면 loading 되게끔..
  if (loading) return <div>Loading...</div>
  console.log(data)

  return (
    <>
      {/* {data.map(item => (
        <li key={item.id}><h1>{item.id}</h1>
          <h1>{item.name}</h1>
        </li>
      ))} */}
      {data}
      {/* hello world */}

    </>
  )
}

export default App;
