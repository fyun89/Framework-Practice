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
			movies: movies,
			addToList: ''
		};
		return _this;
	}

	_createClass(App, [{
		key: 'handleEntry',
		value: function handleEntry(event) {
			event.preventDefault();
			console.log('event is: ', event.target.value);
			//console.log('state is: ', this.state.addToList)
			//console.log('clicked add button');
			this.setState({ addToList: event.target.value });
			//console.log(this.state.addTitle)
		}
	}, {
		key: 'handleAddToList',
		value: function handleAddToList(event) {
			event.preventDefault();
			var contextAbove = this.state.addToList;
			var notDuplicate = movies.every(function (elem) {
				return elem.title.toLowerCase() !== contextAbove.toLowerCase();
			});

			if (notDuplicate) {
				movies.push({ title: contextAbove });
				this.setState({ movies: movies });
			}

			//console.log(duplicate);

			//movies.push({title: this.state.addToList})
			console.log(movies);
		}
	}, {
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
				React.createElement(AddToList, { entry: this.handleEntry.bind(this), add: this.handleAddToList.bind(this) }),
				React.createElement(Search, { search: this.handleSearch.bind(this) }),
				React.createElement(MovieList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImFkZFRvTGlzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnRleHRBYm92ZSIsIm5vdER1cGxpY2F0ZSIsImV2ZXJ5IiwiZWxlbSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwic2VhcmNoTGlzdCIsIm5vTW92aWVGb3VuZCIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImhhbmRsZUVudHJ5IiwiYmluZCIsImhhbmRsZUFkZFRvTGlzdCIsImhhbmRsZVNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQURXO0FBRVhDLGNBQVc7QUFGQSxHQUFiO0FBRmtCO0FBTWxCOzs7OzhCQUVXQyxLLEVBQU07QUFDakJBLFNBQU1DLGNBQU47QUFDQUMsV0FBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJILE1BQU1JLE1BQU4sQ0FBYUMsS0FBdkM7QUFDQTtBQUNBO0FBQ0EsUUFBS0MsUUFBTCxDQUFjLEVBQUNQLFdBQVdDLE1BQU1JLE1BQU4sQ0FBYUMsS0FBekIsRUFBZDtBQUNBO0FBQ0E7OztrQ0FFZUwsSyxFQUFNO0FBQ3JCQSxTQUFNQyxjQUFOO0FBQ0EsT0FBSU0sZUFBZSxLQUFLVixLQUFMLENBQVdFLFNBQTlCO0FBQ0EsT0FBSVMsZUFBZVYsT0FBT1csS0FBUCxDQUFhLFVBQVNDLElBQVQsRUFBYztBQUM3QyxXQUFPQSxLQUFLQyxLQUFMLENBQVdDLFdBQVgsT0FBNkJMLGFBQWFLLFdBQWIsRUFBcEM7QUFDQSxJQUZrQixDQUFuQjs7QUFJQSxPQUFJSixZQUFKLEVBQWtCO0FBQ2pCVixXQUFPZSxJQUFQLENBQVksRUFBQ0YsT0FBT0osWUFBUixFQUFaO0FBQ0EsU0FBS0QsUUFBTCxDQUFjLEVBQUNSLFFBQVFBLE1BQVQsRUFBZDtBQUNBOztBQUdEOztBQUVBO0FBQ0FJLFdBQVFDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBOzs7K0JBSVlFLEssRUFBTztBQUNqQixPQUFJYyxhQUFhLEVBQWpCO0FBQ0EsT0FBSUMsZUFBZSxtQkFBbkI7O0FBRUEsUUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlsQixPQUFPbUIsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3ZDLFFBQUlsQixPQUFPa0IsQ0FBUCxFQUFVTCxLQUFWLENBQWdCQyxXQUFoQixHQUE4Qk0sUUFBOUIsQ0FBdUNsQixNQUFNSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJPLFdBQW5CLEVBQXZDLENBQUosRUFBOEU7QUFDN0VFLGdCQUFXRCxJQUFYLENBQWdCZixPQUFPa0IsQ0FBUCxDQUFoQjtBQUNBO0FBQ0Q7O0FBRUQsT0FBSUYsV0FBV0csTUFBWCxHQUFvQixDQUF4QixFQUEwQjtBQUN6QmYsWUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxTQUFLRyxRQUFMLENBQWM7QUFDYlIsYUFBUWdCO0FBREssS0FBZDtBQUdBLElBTEQsTUFLTSxJQUFJQSxXQUFXRyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ2hDZixZQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxTQUFLRyxRQUFMLENBQWM7QUFDYlIsYUFBUSxDQUFDLEVBQUNhLE9BQU8sa0NBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQSxJQUxLLE1BS0E7QUFDTFQsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxTQUFLRyxRQUFMLENBQWM7QUFDYlIsYUFBUUE7QUFESyxLQUFkO0FBR0E7QUFFSDs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsT0FBSyxJQUFHLE9BQVI7QUFBQTtBQUFBLEtBREQ7QUFJQyx3QkFBQyxTQUFELElBQVcsT0FBTyxLQUFLcUIsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbEIsRUFBK0MsS0FBSyxLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUFwRCxHQUpEO0FBS0Msd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS0UsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEIsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUt2QixLQUFMLENBQVdDLE1BQTlCO0FBTkQsSUFERDtBQVVBOzs7O0VBL0VnQnlCLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHQgIG1vdmllcyxcblx0XHQgIGFkZFRvTGlzdDogJycsXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUVudHJ5KGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdldmVudCBpczogJywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHQvL2NvbnNvbGUubG9nKCdzdGF0ZSBpczogJywgdGhpcy5zdGF0ZS5hZGRUb0xpc3QpXG5cdFx0Ly9jb25zb2xlLmxvZygnY2xpY2tlZCBhZGQgYnV0dG9uJyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWRkVG9MaXN0OiBldmVudC50YXJnZXQudmFsdWV9KTtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuYWRkVGl0bGUpXG5cdH1cblxuXHRoYW5kbGVBZGRUb0xpc3QoZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGNvbnRleHRBYm92ZSA9IHRoaXMuc3RhdGUuYWRkVG9MaXN0IFxuXHRcdHZhciBub3REdXBsaWNhdGUgPSBtb3ZpZXMuZXZlcnkoZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRyZXR1cm4gZWxlbS50aXRsZS50b0xvd2VyQ2FzZSgpICE9PSBjb250ZXh0QWJvdmUudG9Mb3dlckNhc2UoKTtcblx0XHR9KTtcblxuXHRcdGlmIChub3REdXBsaWNhdGUpIHtcblx0XHRcdG1vdmllcy5wdXNoKHt0aXRsZTogY29udGV4dEFib3ZlfSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IG1vdmllc30pO1xuXHRcdH1cblxuXG5cdFx0Ly9jb25zb2xlLmxvZyhkdXBsaWNhdGUpO1xuXG5cdFx0Ly9tb3ZpZXMucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUuYWRkVG9MaXN0fSlcblx0XHRjb25zb2xlLmxvZyhtb3ZpZXMpO1xuXHR9XG5cblxuXG5cdGhhbmRsZVNlYXJjaChldmVudCkge1xuXHRcdCBcdHZhciBzZWFyY2hMaXN0ID0gW107XG5cdFx0IFx0dmFyIG5vTW92aWVGb3VuZCA9IFwibm8gbW92aWUgaXMgZm91bmRcIlxuXG5cdFx0IFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb3ZpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQgXHRcdGlmIChtb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcblx0XHQgXHRcdFx0c2VhcmNoTGlzdC5wdXNoKG1vdmllc1tpXSk7XG5cdFx0IFx0XHR9XG5cdFx0IFx0fVxuXG5cdFx0IFx0aWYgKHNlYXJjaExpc3QubGVuZ3RoID4gMCl7XG5cdFx0IFx0XHRjb25zb2xlLmxvZygnbW92aWUgZm91bmQnKVxuXHRcdFx0IFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHQgXHRcdG1vdmllczogc2VhcmNoTGlzdFxuXHRcdFx0IFx0fSlcblx0XHQgXHR9ZWxzZSBpZiAoc2VhcmNoTGlzdC5sZW5ndGggPCAxKSB7XG5cdFx0IFx0XHRjb25zb2xlLmxvZygnbW92aWUgbm90IGZvdW5kJylcblx0XHQgXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdCBcdFx0XHRtb3ZpZXM6IFt7dGl0bGU6ICdTb3JyeSwgd2UgY2Fubm90IGZpbmQgdGhhdCBtb3ZpZSd9XVxuXHRcdCBcdFx0fSlcblx0XHQgXHR9ZWxzZSB7XG5cdFx0IFx0XHRjb25zb2xlLmxvZygncmVzZXQnKVxuXHRcdCBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0IFx0XHRcdG1vdmllczogbW92aWVzXG5cdFx0IFx0XHR9KVxuXHRcdCBcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJ0aXRsZVwiPiBcblx0XHRcdFx0XHRNb3ZpZSBMaXN0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QWRkVG9MaXN0IGVudHJ5PXt0aGlzLmhhbmRsZUVudHJ5LmJpbmQodGhpcyl9IGFkZD17dGhpcy5oYW5kbGVBZGRUb0xpc3QuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFNlYXJjaCBzZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSJdfQ==