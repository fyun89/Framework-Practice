'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = {
			movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(MovieList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGdCQUFjO0FBQUE7O0FBQUE7O0FBRWIsUUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQVEsQ0FDTCxFQUFDQyxPQUFPLFlBQVIsRUFESyxFQUVQLEVBQUNBLE9BQU8sU0FBUixFQUZPLEVBR04sRUFBQ0EsT0FBTyxVQUFSLEVBSE0sRUFJTixFQUFDQSxPQUFPLFVBQVIsRUFKTSxFQUtOLEVBQUNBLE9BQU8sWUFBUixFQUxNO0FBREcsR0FBYjtBQUZhO0FBV2I7Ozs7MkJBQ1E7QUFDUixVQUVBO0FBQUE7QUFBQTtBQUNDLHdCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtGLEtBQUwsQ0FBV0MsTUFBOUI7QUFERCxJQUZBO0FBT0E7Ozs7RUFyQmdCRSxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHQgIG1vdmllczogW1xuXHQgICAgICB7dGl0bGU6ICdNZWFuIEdpcmxzJ30sXG4gXHRcdCAge3RpdGxlOiAnSGFja2Vycyd9LFxuICBcdFx0ICB7dGl0bGU6ICdUaGUgR3JleSd9LFxuICBcdFx0ICB7dGl0bGU6ICdTdW5zaGluZSd9LFxuICBcdFx0ICB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXG4gIFx0XHQgIF1cblx0XHR9O1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cblx0XHQ8ZGl2PlxuXHRcdFx0PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuXHRcdDwvZGl2PlxuXG5cdFx0KVxuXHR9XG59Il19