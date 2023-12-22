import React from 'react'
import styles from './CreateDir.module.scss'
import Modal from 'react-modal'

const CreateDir = ({ closeModal, modalOpen }) => {
  return (
    <Modal
      isOpen={modalOpen}
    >
      <div>
        <label>컨테이너 이름</label>
        <input
          type='text'
          name='folder_name'
        />
      </div>



      <button onClick={closeModal}>x</button>
    </Modal>
  )
}

export default CreateDir