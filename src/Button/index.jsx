import React, { useState } from 'react'
import classes from './styles.module.css'

export default ({
  children,
  mode,
  fontSize,
  borderRadius,
  active,
  onClick
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const classNames = [classes.Button]
  const styles = {}

  if (!fontSize) {
    fontSize = 20
  }

  if (mode === 'dark') {
    classNames.push(classes.Dark)
    styles.backgroundColor = '#313131'
    styles.color = '#f2f2f2'

    if (isMouseDown && !active) {
      styles.transform = 'scale(0.97)'
      styles.boxShadow = `inset -${fontSize / 30}px -${fontSize / 30}px ${
        fontSize / 15
      }px rgba(96, 96, 96, 0.38), inset ${fontSize / 7}px ${fontSize / 7}px ${
        fontSize / 3
      }px rgba(0, 0, 0, 0.5)`
    } else if (!active) {
      styles.boxShadow = `-${fontSize / 30}px -${fontSize / 30}px ${
        fontSize / 15
      }px rgba(96, 96, 96, 0.38), ${fontSize / 7}px ${fontSize / 7}px ${
        fontSize / 3
      }px rgba(0, 0, 0, 0.5)`
    }

    if (active) {
      classNames.push(classes.Active)
      styles.boxShadow = `inset -${fontSize / 30}px -${fontSize / 30}px ${
        fontSize / 15
      }px rgba(96, 96, 96, 0.38), inset ${fontSize / 7}px ${fontSize / 7}px ${
        fontSize / 3
      }px rgba(0, 0, 0, 0.5)`
    }
  } else {
    classNames.push(classes.Light)
    styles.backgroundColor = '#f2f2f2'
    styles.color = '#313131'

    if (isMouseDown && !active) {
      styles.transform = 'scale(0.97)'
      styles.boxShadow = `inset -${fontSize / 5}px -${fontSize / 5}px ${
        fontSize / 3
      }px rgba(255, 255, 255, 1), inset ${fontSize / 6}px ${fontSize / 6}px ${
        fontSize / 4
      }px rgba(0, 0, 0, 0.16)`
    } else if (!active) {
      styles.boxShadow = `-${fontSize / 5}px -${fontSize / 5}px ${
        fontSize / 3
      }px rgba(255, 255, 255, 1), ${fontSize / 6}px ${fontSize / 6}px ${
        fontSize / 4
      }px rgba(0, 0, 0, 0.16)`
    }

    if (active) {
      classNames.push(classes.Active)
      styles.boxShadow = `inset -${fontSize / 5}px -${fontSize / 5}px ${
        fontSize / 3
      }px rgba(255, 255, 255, 1), inset ${fontSize / 6}px ${fontSize / 6}px ${
        fontSize / 4
      }px rgba(0, 0, 0, 0.16)`
    }
  }

  return (
    <button
      className={classNames.join(' ')}
      onClick={onClick}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      type='button'
      style={{
        borderRadius: borderRadius || `${fontSize}px`,
        padding: `${fontSize / 2}px ${fontSize}px`,
        fontSize: `${fontSize}px`,
        ...styles
      }}
    >
      {children}
    </button>
  )
}
