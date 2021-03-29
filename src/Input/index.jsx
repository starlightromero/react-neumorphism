import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

const Input = ({ mode, width, label, fontSize }) => {
  const [value, setValue] = useState('')
  const labelClassNames = [classes.Label]
  const inputClassNames = [classes.Input]
  const labelStyles = {}
  const inputStyles = {}

  if (!fontSize) {
    fontSize = 20
  }

  const moveSelfOut = (event) => {
    event.target.style.transform = 'translateY(0px)'
    event.target.nextElementSibling.focus()
  }

  const moveLabelOut = (event) => {
    event.target.previousElementSibling.style.transform = 'translateY(0px)'
    event.target.focus()
  }

  const moveLabelIn = (event) => {
    if (value === '') {
      event.target.previousElementSibling.style.transform = `translateY(${
        fontSize * 2
      }px)`
    }
  }

  if (mode === 'dark') {
    labelStyles.color = '#f2f2f2'
    inputStyles.color = '#f2f2f2'
    inputStyles.backgroundColor = '#313131'
    inputStyles.boxShadow = `inset -${fontSize / 3}px -${fontSize / 3}px ${
      fontSize / 2
    }px rgba(96, 96, 96, 0.38), inset ${fontSize / 3}px ${fontSize / 3}px ${
      fontSize / 2
    }px rgba(0, 0, 0, 0.5)`
  } else {
    labelStyles.color = '#313131'
    inputStyles.color = '#313131'
    inputStyles.backgroundColor = '#f2f2f2'
    inputStyles.boxShadow = `inset -${fontSize / 3}px -${fontSize / 3}px ${
      fontSize / 2
    }px rgba(255, 255, 255, 1), inset ${fontSize / 3}px ${fontSize / 3}px ${
      fontSize / 2
    }px rgba(0, 0, 0, 0.18)`
  }

  labelStyles.transform = `translateY(${fontSize * 2}px)`
  inputStyles.height = `${fontSize * 2.5}px`

  return (
    <div>
      <label
        className={labelClassNames.join(' ')}
        onClick={moveSelfOut}
        style={{ fontSize: `${fontSize}px`, ...labelStyles }}
      >
        {label}
      </label>
      <input
        className={inputClassNames.join(' ')}
        style={{
          width: width,
          fontSize: `${fontSize}px`,
          borderRadius: `${fontSize * 1.5}px`,
          ...inputStyles
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={moveLabelOut}
        onBlur={moveLabelIn}
      />
    </div>
  )
}

Input.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  width: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fontSize: PropTypes.number
}

export default Input
