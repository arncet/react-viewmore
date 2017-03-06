#react-viewmore

A component to hide automatically content when its height is larger than browser's height.

##Navigation :

* [How to use](#how-to-use-)
* [Properties](#properties-)
* [Development](#development-)
* [License](#license-)
* [Demo](https://arncet.github.io/react-viewmore/)

##How to use :

Install `react-viewmore` via npm :

```
npm install --save react-viewmore
```

Use it :

```javascript
import Readmore from 'react-viewmore'

<Readmore id='viewmore-example'>
	<h1>Random title</h1>
	<p>...</p>
</Readmore>
```

##Properties :

 * **`id`** *(Number || String)* : An unique id for the Readmore component (*default: random integer*)
 * **`readMoreText`** *(String)* : The button text when the content is hidden (*default: 'View more'*)
 * **`readLessText`** *(String)* : The button text when the content is fully displayed (*default: 'View less'*)
 * **`wrapperClassName`** *(String)* : An additionnal className from the wrapper (*default: 'Read_more'*)
 * **`hideClasse`** *(String)* : An additionnal className when the content is hiden (*default: 'Read\_more_hide'*)
 * **`buttonClassName`** *(String)* : An additionnal className for the button (*default: 'Read_more_button'*)
 * **`offset`** *(Number)* : An additionnal height to max value to hide the children contnet (*default: 0*)
 * **`onHide`** *(Function)* : A callback called when the content is hides
 * **`onShow`** *(Function)* : A callback called when the content is shown
 * **`onReadmore`**: *(Function)* : A callback called when the `view more` button is clicked
 * **`onReadless`**: *(Function)* : A callback called when the `view less` button is clicked
 * **`type`** *(String || Component)* : A custom HTML tag or a component to replace the default `view more` button.
 * **`maxHeight`** *(String)* : A max height to hide the content.

---------------------------------------

##Development :

```
npm install 		  //Install node modules
npm run storybook //Launch the project

npm lint    		 //Run linter
```

##License :

MIT







