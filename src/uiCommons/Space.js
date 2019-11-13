import React from 'react'
import { Box } from "@material-ui/core"

export default ({ size, kind }) => {
  const props = {}
  if (kind === 'inline') {
    props.display = 'inline-block'
    props.marginRight = size
  } else {
    props.display = 'block'
    props.marginBottom = size
  }

  return <Box {...props} />
}