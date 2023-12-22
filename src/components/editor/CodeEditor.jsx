import React from 'react'
import styles from './CodeEditor.module.scss'
import Editor from '@monaco-editor/react'


const CodeEditor = () => {
  return (
    <div className={styles.editor}>
      <div className={styles.folder_name_area} />
        <Editor
          height='100%'
          theme='tomorrow'
          options={{
            fontSize: 15,
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto'
            }
          }}
        />
    </div>
  )
}

export default CodeEditor