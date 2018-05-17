'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBUSxDQUNMLEVBQUNDLE9BQU8sWUFBUixFQURLLEVBRVAsRUFBQ0EsT0FBTyxTQUFSLEVBRk8sRUFHTixFQUFDQSxPQUFPLFVBQVIsRUFITSxFQUlOLEVBQUNBLE9BQU8sVUFBUixFQUpNLEVBS04sRUFBQ0EsT0FBTyxZQUFSLEVBTE07QUFERyxHQUFiO0FBRmtCO0FBV2xCOzs7OzJCQUNRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLRixLQUFMLENBQVdDLE1BQTlCO0FBREQsSUFERDtBQUtBOzs7O0VBbkJnQkUsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdCAgbW92aWVzOiBbXG5cdCAgICAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcbiBcdFx0ICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gIFx0XHQgIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gIFx0XHQgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gIFx0XHQgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbiAgXHRcdCAgXVxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSJdfQ==