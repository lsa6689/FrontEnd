import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Mypage.module.scss'
import { Link, useNavigate } from 'react-router-dom/dist';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const navigate = useNavigate();


  useEffect(() => {
    axios.get('/api/userInfo')
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/userInfo', userInfo)
      .then(res => {
        alert('정보가 성공적으로 수정되었습니다');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className={styles.myPage}>
      <h1>마이페이지</h1>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input type='text' name='name' value={userInfo.name} onChange={handleChange} />
        </label>
        <label>
          이메일:
          <input type='email' name='email' value={userInfo.email} onChange={handleChange} />
        </label>
        <label>
          주소:
          <input type='text' name='address' value={userInfo.address} onChange={handleChange} />
        </label>
        <label>
          전화번호:
          <input type='tel' name='phone' value={userInfo.phone} onChange={handleChange} />
        </label>
        <button type='sumbmit'>정보 수정</button>
          <button onClick={() => navigate("/main")}>취소</button>
      </form>
    </div>
  );
};

export default MyPage;
