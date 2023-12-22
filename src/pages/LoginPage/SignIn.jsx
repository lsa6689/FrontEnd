import React, { useState } from 'react'
import axios from 'axios';
import styles from './SignIn.module.scss';
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {

  const [loginValues, setLoginValues] = useState({
    userId: "",
    password: "",
  });


  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const [errorMessage, setErrorMessage] = useState("");


  const checkSignIn = async () => {
    if (!loginValues.userId && !loginValues.password) {
      setErrorMessage("아이디를 입력해주세요")
      return
    }
    if (!loginValues.userId) {
      setErrorMessage("아이디를 입력해주세요")
      return
    }
    if (!loginValues.password) {
      setErrorMessage("비밀번호를 입력해주세요")
      return
    }
    //api 연결
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          userId: loginValues.userId,
          password: loginValues.password,
        }
      );
      if (response.status === 200) {
        // 성공 로직
        if (response.data && response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem('user', JSON.stringify(response.data))
          navigate("/main");
        } else {
          alert("로그인에 실패했습니다. 다시 시도해 주세요.");
        }
      } else if (response.status === 401) {
        // 권한 없음, 로그인 실패 로직
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else {
        // 기타 에러 로직
        alert("서버에서 오류가 발생하였습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      //로그인 에러 표시
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // 서버에서 에러 메시지를 제공하는 경우
        alert(error.response.data.message);
      } else {
        // 그 외의 클라이언트 측에서 잡힌 에러
        alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
      }
    }
  }



  return (
    <div className={styles.signin}>
      <div className={styles.container}>
        <h1>Login</h1>
        <br />
        <div className={styles.formSignin}>
          <input
            name='userId'
            type='text'
            placeholder="아이디를 입력해주세요."
            onChange={handleInputChange}
          />
          <input
            name='password'
            type='password'
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputChange}
          />
          {errorMessage && (
            <p>{errorMessage}</p>
          )}
          <button type="submit" className={styles.registerbtn} onClick={checkSignIn}>로그인</button>
          <div className={styles.already_member}>
            아직 회원이 아닙니까?
            <span onClick={() => navigate("/register")}> 회원가입</span>
          </div>
        </div>

      </div>


    </div>
  )
}

export default SignIn