import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './Doc/testData.json';
import './App.css'



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
      <div className='container base'>
        <div className='post-group-list'>
          <ul>
            <li>

              {api.map(item => (
                <div className='post-group' key={item.id}>
                  <div className='product-img pull-left'>

                    <div className='product-img-box'>
                      <a href={item.link} target='_blank'>
                        <img src={item.img} width='92' height='92' alt={item.title} />
                      </a>
                    </div>
                  </div>
                  <div className='product-body clearfix'>
                    <div className='header'>
                      <p className='deal-header-p'>
                        알라딘
                      </p>
                      <p>
                        <span>
                          <a href={item.link} target='_blank'>
                            {item.title}
                          </a>
                        </span>
                        <p>
                          <span>{item.author}</span>
                          <p>
                            <small>{item.isbn}</small>
                          </p>
                        </p>
                      </p>
                    </div>
                    <div className='deal-price-group'>
                      <p className='deal-price-info'>
                        <h7>{item.priceText}</h7>
                      </p>
                      <p className='deal-price'>
                        <h7>{item.price}</h7>
                      </p>
                    </div>

                    {/* 이미지 링크와 새 창에서 열기 */}




                  </div>
                </div>
              ))}

            </li>
          </ul>

          {/* hello world */}
        </div>
      </div>
    </>
  )
}

export default App;
