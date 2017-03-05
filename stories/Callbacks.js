import React from 'react'
import { action } from '@kadira/storybook'
import Readmore from '../src/index'
import LoremHTML from './LoremHTML'

const Callbacks = () => (
  <Readmore onHide={action('onHide !')} onShow={action('onShow !')} onReadmore={action('onReadmore !')} onReadless={action('onReadless !')}>
    <LoremHTML title='Callbacks' />
  </Readmore>
)

export default Callbacks
