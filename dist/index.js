'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

//Style


var styles = _noImportant.StyleSheet.create(_style2.default);

var Readmore = function (_Component) {
  _inherits(Readmore, _Component);

  function Readmore(props) {
    _classCallCheck(this, Readmore);

    var _this = _possibleConstructorReturn(this, (Readmore.__proto__ || Object.getPrototypeOf(Readmore)).call(this, props));

    _this.state = { hide: true, displayButton: false };
    _this.resize = _this.resize.bind(_this);
    return _this;
  }

  _createClass(Readmore, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          id = _props.id,
          hideClasse = _props.hideClasse,
          wrapperClassName = _props.wrapperClassName,
          buttonClassName = _props.buttonClassName,
          readMoreText = _props.readMoreText,
          readLessText = _props.readLessText,
          type = _props.type;
      var _state = this.state,
          hide = _state.hide,
          displayButton = _state.displayButton;


      var hideAndDisplayButtonClasse = hide && displayButton ? hideClasse + ' ' + (0, _noImportant.css)(styles['Read_more_hide']) : '';
      var noHideAndDisplayButtonClasse = !hide && displayButton ? (0, _noImportant.css)(styles['Read_more_padding']) : '';

      var buttonProps = { className: buttonClassName + ' ' + (0, _noImportant.css)(styles['Read_more_button']), onClick: function onClick() {
          return _this2.setState({ hide: !hide });
        } };
      var button = (0, _react.createElement)(type, buttonProps, hide ? readMoreText : readLessText);

      return _react2.default.createElement(
        'div',
        { className: wrapperClassName + ' ' + (0, _noImportant.css)(styles['Read_more']) },
        _react2.default.createElement(
          'div',
          { className: hideAndDisplayButtonClasse + ' ' + noHideAndDisplayButtonClasse },
          _react2.default.createElement(
            'div',
            { ref: 'read_more_' + id, className: 'Read_more_children_wrapper' },
            children
          )
        ),
        displayButton ? button : null
      );
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.hide && !this.state.hide) this.props.onReadless();else if (!nextState.hide && this.state.hide) this.props.onReadmore();

      if (nextState.displayButton && !this.state.displayButton) this.props.onHide();else if (!nextState.displayButton && this.state.displayButton) this.props.onShow();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize();
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _props2 = this.props,
          id = _props2.id,
          offset = _props2.offset;

      var maxHeight = getBrowserHeight();
      var elementHeight = this.refs['read_more_' + id].offsetHeight;
      if (elementHeight > maxHeight + offset) this.setState({ displayButton: true });else this.setState({ displayButton: false, hide: true });
    }
  }]);

  return Readmore;
}(_react.Component);

var getBrowserHeight = function getBrowserHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Readmore.defaultProps = {
  hideClasse: 'Read_more_hide',
  wrapperClassName: 'Read_more',
  buttonClassName: 'Read_more_button',
  id: getRandomInt(1, 10000),
  readMoreText: 'View more',
  readLessText: 'View less',
  offset: 0,
  type: 'button',
  onHide: function onHide() {},
  onShow: function onShow() {},
  onReadmore: function onReadmore() {},
  onReadless: function onReadless() {}
};

exports.default = Readmore;
