import React, { useState } from 'react'
import styles from './MainPage.module.scss'
import Header from '../../components/header/Header'
import FileSidebar from '../../components/file-sidebar/FileSidebar'
import Directory from '../../components/directory/Directory'
import CodeEditor from '../../components/editor/CodeEditor'

const MainPage = () => {
  return (

    <div className={styles.mainpage}>
      <Header />
      <div className={styles.layout}>
        <FileSidebar />
        {/* <Directory /> */}
        <CodeEditor />
      </div>

    </div>
  )
}

export default MainPage