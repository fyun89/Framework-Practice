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
		key: 'handleSearch',
		value: function handleSearch(event) {
			// //this.props.search(
			console.log(event.target.value);
			if (event.target.value === this.state.movies[0]) {
				this.setState({
					movies: ['Mean Girls']
				});
			} else {
				this.setState({
					movies: ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']
				});
			}
			// )
		}
	}, {
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
				React.createElement(Search, { search: this.handleSearch.bind(this) }),
				React.createElement(MovieList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBUyxDQUNOLFlBRE0sRUFFUixTQUZRLEVBR1AsVUFITyxFQUlQLFVBSk8sRUFLUCxZQUxPO0FBREUsR0FBYjtBQUZrQjtBQVdsQjs7OzsrQkFHWUMsSyxFQUFPO0FBQ25CO0FBQ0VDLFdBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsTUFBTixDQUFhQyxLQUF6QjtBQUNELE9BQUlKLE1BQU1HLE1BQU4sQ0FBYUMsS0FBYixLQUF1QixLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBM0IsRUFBZ0Q7QUFDL0MsU0FBS00sUUFBTCxDQUFjO0FBQ2JOLGFBQVEsQ0FDUixZQURRO0FBREssS0FBZDtBQUtBLElBTkQsTUFNTTtBQUNMLFNBQUtNLFFBQUwsQ0FBYztBQUNiTixhQUFTLENBQ0osWUFESSxFQUVOLFNBRk0sRUFHTCxVQUhLLEVBSUwsVUFKSyxFQUtMLFlBTEs7QUFESSxLQUFkO0FBU0E7QUFDRjtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxPQUFLLElBQUcsT0FBUjtBQUFBO0FBQUEsS0FERDtBQUlDLHdCQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtPLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWhCLEdBSkQ7QUFLQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLVCxLQUFMLENBQVdDLE1BQTlCO0FBTEQsSUFERDtBQVNBOzs7O0VBaERnQlMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdCAgbW92aWVzIDogW1xuXHQgICAgICAnTWVhbiBHaXJscycsXG4gXHRcdCAgJ0hhY2tlcnMnLFxuICBcdFx0ICAnVGhlIEdyZXknLFxuICBcdFx0ICAnU3Vuc2hpbmUnLFxuICBcdFx0ICAnRXggTWFjaGluYScsXG4gIFx0XHQgIF1cblx0XHR9O1xuXHR9XG5cblxuXHRoYW5kbGVTZWFyY2goZXZlbnQpIHtcblx0XHQvLyAvL3RoaXMucHJvcHMuc2VhcmNoKFxuXHRcdCBcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHRcdGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IHRoaXMuc3RhdGUubW92aWVzWzBdKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbXG5cdFx0XHRcdFx0J01lYW4gR2lybHMnXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9KVxuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXMgOiBbXG5cdFx0XHRcdCAgICAgICdNZWFuIEdpcmxzJyxcblx0XHRcdCBcdFx0ICAnSGFja2VycycsXG5cdFx0XHQgIFx0XHQgICdUaGUgR3JleScsXG5cdFx0XHQgIFx0XHQgICdTdW5zaGluZScsXG5cdFx0XHQgIFx0XHQgICdFeCBNYWNoaW5hJyxcblx0XHRcdCAgXHRcdF1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQvLyApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBpZD1cInRpdGxlXCI+IFxuXHRcdFx0XHRcdE1vdmllIExpc3Rcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxTZWFyY2ggc2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iXX0=