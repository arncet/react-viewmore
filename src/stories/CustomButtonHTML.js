import React from 'react'
import { action } from '@kadira/storybook'
import Readmore from '../index'
import LoremHTML from './LoremHTML'

const CustomButtonHTML = () => (
  <Readmore type='a'>
    <LoremHTML title='Custom Button (HTML)' />
  </Readmore>
)

export default CustomButtonHTML
