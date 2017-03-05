import React from 'react'
import { action } from '@kadira/storybook'
import Readmore from '../index'
import LoremHTML from './LoremHTML'

const CustomButtonHTML = () => (
  <Readmore type={CustomComponent}>
    <LoremHTML title='Custom Button (component)' />
  </Readmore>
)

const CustomComponent = ({ children, ...props }) => (
  <div {...props} style={{ color: '#FFF', backgroundColor: 'blue', padding: '5px 10px', textAlign: 'center' }}>
    {children}
  </div>
)

export default CustomButtonHTML
