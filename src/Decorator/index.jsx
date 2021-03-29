import React from 'react'
import PropTypes from 'prop-types'

const Decorator = ({ mode, size }) => {
  let styles
  const middleSize = (size / 4) * 3
  const middleMargin = (size - middleSize) / 2
  const innerSize = size / 2
  const innerMargin = (middleSize - innerSize) / 2

  if (mode === 'dark') {
    styles = {
      backgroundColor: '#313131',
      boxShadow: `-${size / 40}px -${size / 40}px ${
        (size / 80) * 3
      }px rgba(96, 96, 96, 0.38), ${size / 10}px ${size / 10}px ${
        (size / 20) * 3
      }px rgba(0, 0, 0, 0.5)`
    }
  } else {
    styles = {
      backgroundColor: '#f2f2f2',
      boxShadow: `-${size / 40}px -${size / 40}px ${
        (size / 80) * 3
      }px rgba(255, 255, 255, 1), ${size / 10}px ${size / 10}px ${
        (size / 20) * 3
      }px rgba(0, 0, 0, 0.16)`
    }
  }

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '100%',
        ...styles
      }}
    >
      <div
        style={{
          width: `${middleSize}px`,
          height: `${middleSize}px`,
          left: `${middleMargin}px`,
          top: `${middleMargin}px`,
          position: 'relative',
          borderRadius: '100%',
          ...styles
        }}
      >
        <div
          style={{
            width: `${innerSize}px`,
            height: `${innerSize}px`,
            left: `${innerMargin}px`,
            top: `${innerMargin}px`,
            position: 'relative',
            borderRadius: '100%',
            ...styles
          }}
        />
      </div>
    </div>
  )
}

Decorator.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.number.isRequired
}

export default Decorator
