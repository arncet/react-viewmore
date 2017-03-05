/**
 * Readmore Component
 *
 * A component that automatically hides content at when height is greater than the browser's height.
 * When the content is hidden a button 'Show more' is displayed.
 *
 * Props :
 *   - id (Number || String) : An unique id for the Readmore component (default: random integer)
 *   - readMoreText (String) : The button text when the content is hidden (default: 'Lire la suite')
 *   - readLessText (String) : The button text when the content is fully displayed (default: 'Lire moins')
 *   - wrapperClassName (String) : An additionnal className from the wrapper (default: 'Read_more')
 *   - hideClasse (String) : An additionnal className when the content is hiden (default: 'Read_more_hide')
 *   - buttonClassName (String) : An additionnal className for the button (default: 'Read_more_button')
 *   - offset (Number) : An additionnal height to max value to hide the children contnet (default: 0)
 *   - onHide (Function) : A callback called when the content is hides
 *   - onShow (Function) : A callback called when the content is shown
 *   - onReadmore: (Function) : A callback called when the `view more` button is clicked
 *   - onReadless: (Function) : A callback called when the `view less` button is clicked
 *   - type (String || Component) : A custom HTML tag or a component to replace the default `view more` button.
 *
 * Example :
 *   <Readmore id='readmore-example'>
 *     <h1>Random title</h1>
 *     <p>...</p>
 *   </Readmore>
 */

import React, { Component, createElement } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

//Style
import importedStyle from './style'

const styles = StyleSheet.create(importedStyle)

class Readmore extends Component {
  constructor(props) {
    super(props)
    this.state = { hide: true, displayButton: false }
    this.resize = this.resize.bind(this)
  }

  render () {
    const { children, id, hideClasse, wrapperClassName, buttonClassName, readMoreText, readLessText, type } = this.props
    const { hide, displayButton } = this.state

    const hideAndDisplayButtonClasse = hide && displayButton ? `${hideClasse} ${css(styles['Read_more_hide'])}` : ''
    const noHideAndDisplayButtonClasse = !hide && displayButton ? css(styles['Read_more_padding']) : ''

    const buttonProps = {className: `${buttonClassName} ${css(styles['Read_more_button'])}`, onClick: () => this.setState({ hide: !hide })}
    const button = createElement(type, buttonProps, hide ? readMoreText : readLessText)

    return (
      <div className={`${wrapperClassName} ${css(styles['Read_more'])}`}>
        <div className={`${hideAndDisplayButtonClasse} ${noHideAndDisplayButtonClasse}`}>
          <div ref={`read_more_${id}`} className='Read_more_children_wrapper'>
            { children }
          </div>
        </div>
        { displayButton ? button : null }
      </div>
    )
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.hide && !this.state.hide) this.props.onReadless()
    else if (!nextState.hide && this.state.hide) this.props.onReadmore()
    
    if (nextState.displayButton && !this.state.displayButton) this.props.onHide()
    else if (!nextState.displayButton && this.state.displayButton) this.props.onShow()
  }

  componentDidMount() {
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize() {
    const { id, offset } = this.props
    const maxHeight = getBrowserHeight() 
    const elementHeight = this.refs[`read_more_${id}`].offsetHeight
    if (elementHeight > (maxHeight + offset)) this.setState({ displayButton: true })
    else this.setState({ displayButton: false, hide: true })
  }
}

const getBrowserHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

Readmore.defaultProps = {
  hideClasse: 'Read_more_hide',
  wrapperClassName: 'Read_more',
  buttonClassName: 'Read_more_button',
  id: getRandomInt(1, 10000),
  readMoreText: 'View more',
  readLessText: 'View less',
  offset: 0,
  type: 'button',
  onHide: () => {},
  onShow: () => {},
  onReadmore: () => {},
  onReadless: () => {}
}

export default Readmore
