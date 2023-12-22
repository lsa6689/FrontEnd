import React from 'react'
import styles from './Item.module.scss'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const item = ({item}) => {
  return (
    <li className={styles.directory_item}>

      <h4>{item.title}</h2>

      <Link to={`/main/${item.title}`}>
        <button>
          <FaPlay /> 시작하기
        </button>
      </Link>

    </li>
  )
}

export default item