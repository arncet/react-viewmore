import React from 'react'
import Readmore from '../src/index'
import LoremHTML from './LoremHTML'

const Offset = ({ offset }) => (
  <Readmore offset={offset}>
    <LoremHTML title={`Offset ${offset}px`} />
  </Readmore>
)

export default Offset
