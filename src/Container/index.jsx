import React from 'react'
import classes from './styles.module.css'

export default ({ mode, children, height, width, borderRadius, style }) => {
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
