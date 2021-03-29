import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

const Container = ({ mode, children, height, width, borderRadius, style }) => {
  const containerClassNames = [classes.Container]

  if (mode === 'dark') {
    containerClassNames.push(classes.Dark)
  } else {
    containerClassNames.push(classes.Light)
  }

  return (
    <div
      className={containerClassNames.join(' ')}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius || '30px'
      }}
    >
      <div style={{ padding: '10px', ...style }}>{children}</div>
    </div>
  )
}

Container.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.arrayOf(PropTypes.element),
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  borderRadius: PropTypes.number,
  style: PropTypes.object
}

export default Container
