import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const NotFound = () => {
  return (
  <div>
    <Button>
      <Link to="/">
        Home
        </Link>
    </Button>
    </div>
  )
}

export default NotFound