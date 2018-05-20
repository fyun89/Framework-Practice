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
			movies: movies
		};
		return _this;
	}

	_createClass(App, [{
		key: 'handleSearch',
		value: function handleSearch(event) {
			var searchList = [];
			var noMovieFound = "no movie is found";

			for (var i = 0; i < movies.length; i++) {
				if (movies[i].title.toLowerCase().includes(event.target.value.toLowerCase())) {
					searchList.push(movies[i]);
				}
			}

			if (searchList.length > 0) {
				console.log('movie found');
				this.setState({
					movies: searchList
				});
			} else if (searchList.length < 1) {
				console.log('movie not found');
				this.setState({
					movies: [{ title: 'Sorry, we cannot find that movie' }]
				});
			} else {
				console.log('reset');
				this.setState({
					movies: movies
				});
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImV2ZW50Iiwic2VhcmNoTGlzdCIsIm5vTW92aWVGb3VuZCIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWEM7QUFEVyxHQUFiO0FBRmtCO0FBS2xCOzs7OytCQUdZQyxLLEVBQU87QUFDakIsT0FBSUMsYUFBYSxFQUFqQjtBQUNBLE9BQUlDLGVBQWUsbUJBQW5COztBQUVBLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixPQUFPSyxNQUEzQixFQUFtQ0QsR0FBbkMsRUFBd0M7QUFDdkMsUUFBSUosT0FBT0ksQ0FBUCxFQUFVRSxLQUFWLENBQWdCQyxXQUFoQixHQUE4QkMsUUFBOUIsQ0FBdUNQLE1BQU1RLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkgsV0FBbkIsRUFBdkMsQ0FBSixFQUE4RTtBQUM3RUwsZ0JBQVdTLElBQVgsQ0FBZ0JYLE9BQU9JLENBQVAsQ0FBaEI7QUFDQTtBQUNEOztBQUVELE9BQUlGLFdBQVdHLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMEI7QUFDekJPLFlBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ2JkLGFBQVFFO0FBREssS0FBZDtBQUdBLElBTEQsTUFLTSxJQUFJQSxXQUFXRyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ2hDTyxZQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDYmQsYUFBUSxDQUFDLEVBQUNNLE9BQU8sa0NBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQSxJQUxLLE1BS0E7QUFDTE0sWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDYmQsYUFBUUE7QUFESyxLQUFkO0FBR0E7QUFFSDs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsT0FBSyxJQUFHLE9BQVI7QUFBQTtBQUFBLEtBREQ7QUFJQyx3QkFBQyxNQUFELElBQVEsUUFBUSxLQUFLZSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQixHQUpEO0FBS0Msd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsTUFBOUI7QUFMRCxJQUREO0FBU0E7Ozs7RUFoRGdCaUIsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdCAgbW92aWVzXG5cdFx0fTtcblx0fVxuXG5cblx0aGFuZGxlU2VhcmNoKGV2ZW50KSB7XG5cdFx0IFx0dmFyIHNlYXJjaExpc3QgPSBbXTtcblx0XHQgXHR2YXIgbm9Nb3ZpZUZvdW5kID0gXCJubyBtb3ZpZSBpcyBmb3VuZFwiXG5cblx0XHQgXHRmb3IgKHZhciBpID0gMDsgaSA8IG1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdCBcdFx0aWYgKG1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdCBcdFx0XHRzZWFyY2hMaXN0LnB1c2gobW92aWVzW2ldKTtcblx0XHQgXHRcdH1cblx0XHQgXHR9XG5cblx0XHQgXHRpZiAoc2VhcmNoTGlzdC5sZW5ndGggPiAwKXtcblx0XHQgXHRcdGNvbnNvbGUubG9nKCdtb3ZpZSBmb3VuZCcpXG5cdFx0XHQgXHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdCBcdFx0bW92aWVzOiBzZWFyY2hMaXN0XG5cdFx0XHQgXHR9KVxuXHRcdCBcdH1lbHNlIGlmIChzZWFyY2hMaXN0Lmxlbmd0aCA8IDEpIHtcblx0XHQgXHRcdGNvbnNvbGUubG9nKCdtb3ZpZSBub3QgZm91bmQnKVxuXHRcdCBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0IFx0XHRcdG1vdmllczogW3t0aXRsZTogJ1NvcnJ5LCB3ZSBjYW5ub3QgZmluZCB0aGF0IG1vdmllJ31dXG5cdFx0IFx0XHR9KVxuXHRcdCBcdH1lbHNlIHtcblx0XHQgXHRcdGNvbnNvbGUubG9nKCdyZXNldCcpXG5cdFx0IFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQgXHRcdFx0bW92aWVzOiBtb3ZpZXNcblx0XHQgXHRcdH0pXG5cdFx0IFx0fVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBpZD1cInRpdGxlXCI+IFxuXHRcdFx0XHRcdE1vdmllIExpc3Rcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxTZWFyY2ggc2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iXX0=