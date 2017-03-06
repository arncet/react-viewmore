import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Default from './Default'
import Offset from './Offset'
import Callbacks from './Callbacks'
import CustomButtonHTML from './CustomButtonHTML'
import CustomButtonComponent from './CustomButtonComponent'
import MaxHeight from './MaxHeight'

storiesOf('Button')
  .add('Default', () => <Default />)
  .add('Positive offset', () => <Offset offset={100}/>)
  .add('Negative offset', () => <Offset offset={-100}/>)
  .add('Callbacks', () => <Callbacks />)
  .add('Custom button (HTML)', () => <CustomButtonHTML />)
  .add('Custom button (component)', () => <CustomButtonComponent />)
  .add('Max height', () => <MaxHeight />)
