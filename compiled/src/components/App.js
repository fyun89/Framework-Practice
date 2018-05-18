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
			movies: ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ id: 'title' },
					'Movie List'
				),
				React.createElement(MovieList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQVMsQ0FDTixZQURNLEVBRVIsU0FGUSxFQUdQLFVBSE8sRUFJUCxVQUpPLEVBS1AsWUFMTztBQURFLEdBQWI7QUFGa0I7QUFXbEI7Ozs7MkJBQ1E7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxPQUFLLElBQUcsT0FBUjtBQUFBO0FBQUEsS0FERDtBQUlDLHdCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtELEtBQUwsQ0FBV0MsTUFBOUI7QUFKRCxJQUREO0FBUUE7Ozs7RUF0QmdCQyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0ICBtb3ZpZXMgOiBbXG5cdCAgICAgICdNZWFuIEdpcmxzJyxcbiBcdFx0ICAnSGFja2VycycsXG4gIFx0XHQgICdUaGUgR3JleScsXG4gIFx0XHQgICdTdW5zaGluZScsXG4gIFx0XHQgICdFeCBNYWNoaW5hJyxcbiAgXHRcdCAgXVxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJ0aXRsZVwiPiBcblx0XHRcdFx0XHRNb3ZpZSBMaXN0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iXX0=