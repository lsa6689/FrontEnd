import React, { useState } from 'react'
import styles from './Directory.module.scss'
import Items from './directory-items/Items'
import CreateDir from './create-directory/CreateDir';

const Directory = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.directory}>
      <div className={styles.container}>
        <div className={styles.note__title}>
          <h1>Containers</h1>
          <button onClick={openModal}>+</button>
          <CreateDir closeModal={closeModal} modalOpen={modalOpen}/>
        </div>
        <hr />
        <Items />

      </div>
    </div>
  )
}

export default Directory