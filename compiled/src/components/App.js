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
			this.setState({ addToList: '' });

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
				React.createElement(AddToList, { entry: this.handleEntry.bind(this), add: this.handleAddToList.bind(this), state: this.state }),
				React.createElement(Search, { search: this.handleSearch.bind(this) }),
				React.createElement(MovieList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImFkZFRvTGlzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnRleHRBYm92ZSIsIm5vdER1cGxpY2F0ZSIsImV2ZXJ5IiwiZWxlbSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwic2VhcmNoTGlzdCIsIm5vTW92aWVGb3VuZCIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImhhbmRsZUVudHJ5IiwiYmluZCIsImhhbmRsZUFkZFRvTGlzdCIsImhhbmRsZVNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQURXO0FBRVhDLGNBQVc7QUFGQSxHQUFiO0FBRmtCO0FBTWxCOzs7OzhCQUVXQyxLLEVBQU07QUFDakJBLFNBQU1DLGNBQU47QUFDQUMsV0FBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJILE1BQU1JLE1BQU4sQ0FBYUMsS0FBdkM7QUFDQTtBQUNBO0FBQ0EsUUFBS0MsUUFBTCxDQUFjLEVBQUNQLFdBQVdDLE1BQU1JLE1BQU4sQ0FBYUMsS0FBekIsRUFBZDtBQUNBO0FBQ0E7OztrQ0FFZUwsSyxFQUFNO0FBQ3JCQSxTQUFNQyxjQUFOO0FBQ0EsT0FBSU0sZUFBZSxLQUFLVixLQUFMLENBQVdFLFNBQTlCO0FBQ0EsT0FBSVMsZUFBZVYsT0FBT1csS0FBUCxDQUFhLFVBQVNDLElBQVQsRUFBYztBQUM3QyxXQUFPQSxLQUFLQyxLQUFMLENBQVdDLFdBQVgsT0FBNkJMLGFBQWFLLFdBQWIsRUFBcEM7QUFDQSxJQUZrQixDQUFuQjs7QUFJQSxPQUFJSixZQUFKLEVBQWtCO0FBQ2pCVixXQUFPZSxJQUFQLENBQVksRUFBQ0YsT0FBT0osWUFBUixFQUFaO0FBQ0EsU0FBS0QsUUFBTCxDQUFjLEVBQUNSLFFBQVFBLE1BQVQsRUFBZDtBQUNBO0FBQ0QsUUFBS1EsUUFBTCxDQUFjLEVBQUNQLFdBQVcsRUFBWixFQUFkOztBQUdBOztBQUVBO0FBQ0FHLFdBQVFDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBOzs7K0JBSVlFLEssRUFBTztBQUNqQixPQUFJYyxhQUFhLEVBQWpCO0FBQ0EsT0FBSUMsZUFBZSxtQkFBbkI7O0FBRUEsUUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlsQixPQUFPbUIsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3ZDLFFBQUlsQixPQUFPa0IsQ0FBUCxFQUFVTCxLQUFWLENBQWdCQyxXQUFoQixHQUE4Qk0sUUFBOUIsQ0FBdUNsQixNQUFNSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJPLFdBQW5CLEVBQXZDLENBQUosRUFBOEU7QUFDN0VFLGdCQUFXRCxJQUFYLENBQWdCZixPQUFPa0IsQ0FBUCxDQUFoQjtBQUNBO0FBQ0Q7O0FBRUQsT0FBSUYsV0FBV0csTUFBWCxHQUFvQixDQUF4QixFQUEwQjtBQUN6QmYsWUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxTQUFLRyxRQUFMLENBQWM7QUFDYlIsYUFBUWdCO0FBREssS0FBZDtBQUdBLElBTEQsTUFLTSxJQUFJQSxXQUFXRyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ2hDZixZQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxTQUFLRyxRQUFMLENBQWM7QUFDYlIsYUFBUSxDQUFDLEVBQUNhLE9BQU8sa0NBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQSxJQUxLLE1BS0E7QUFDTFQsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxTQUFLRyxRQUFMLENBQWM7QUFDYlIsYUFBUUE7QUFESyxLQUFkO0FBR0E7QUFFSDs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsT0FBSyxJQUFHLE9BQVI7QUFBQTtBQUFBLEtBREQ7QUFJQyx3QkFBQyxTQUFELElBQVcsT0FBTyxLQUFLcUIsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbEIsRUFBK0MsS0FBSyxLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUFwRCxFQUFxRixPQUFPLEtBQUt2QixLQUFqRyxHQUpEO0FBS0Msd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS3lCLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQWhCLEdBTEQ7QUFNQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLdkIsS0FBTCxDQUFXQyxNQUE5QjtBQU5ELElBREQ7QUFVQTs7OztFQWhGZ0J5QixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0ICBtb3ZpZXMsXG5cdFx0ICBhZGRUb0xpc3Q6ICcnLFxuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVFbnRyeShldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZygnZXZlbnQgaXM6ICcsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0Ly9jb25zb2xlLmxvZygnc3RhdGUgaXM6ICcsIHRoaXMuc3RhdGUuYWRkVG9MaXN0KVxuXHRcdC8vY29uc29sZS5sb2coJ2NsaWNrZWQgYWRkIGJ1dHRvbicpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2FkZFRvTGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFkZFRpdGxlKVxuXHR9XG5cblx0aGFuZGxlQWRkVG9MaXN0KGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBjb250ZXh0QWJvdmUgPSB0aGlzLnN0YXRlLmFkZFRvTGlzdCBcblx0XHR2YXIgbm90RHVwbGljYXRlID0gbW92aWVzLmV2ZXJ5KGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0cmV0dXJuIGVsZW0udGl0bGUudG9Mb3dlckNhc2UoKSAhPT0gY29udGV4dEFib3ZlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAobm90RHVwbGljYXRlKSB7XG5cdFx0XHRtb3ZpZXMucHVzaCh7dGl0bGU6IGNvbnRleHRBYm92ZX0pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBtb3ZpZXN9KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWRkVG9MaXN0OiAnJ30pXG5cblxuXHRcdC8vY29uc29sZS5sb2coZHVwbGljYXRlKTtcblxuXHRcdC8vbW92aWVzLnB1c2goe3RpdGxlOiB0aGlzLnN0YXRlLmFkZFRvTGlzdH0pXG5cdFx0Y29uc29sZS5sb2cobW92aWVzKTtcblx0fVxuXG5cblxuXHRoYW5kbGVTZWFyY2goZXZlbnQpIHtcblx0XHQgXHR2YXIgc2VhcmNoTGlzdCA9IFtdO1xuXHRcdCBcdHZhciBub01vdmllRm91bmQgPSBcIm5vIG1vdmllIGlzIGZvdW5kXCJcblxuXHRcdCBcdGZvciAodmFyIGkgPSAwOyBpIDwgbW92aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0IFx0XHRpZiAobW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0IFx0XHRcdHNlYXJjaExpc3QucHVzaChtb3ZpZXNbaV0pO1xuXHRcdCBcdFx0fVxuXHRcdCBcdH1cblxuXHRcdCBcdGlmIChzZWFyY2hMaXN0Lmxlbmd0aCA+IDApe1xuXHRcdCBcdFx0Y29uc29sZS5sb2coJ21vdmllIGZvdW5kJylcblx0XHRcdCBcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0IFx0XHRtb3ZpZXM6IHNlYXJjaExpc3Rcblx0XHRcdCBcdH0pXG5cdFx0IFx0fWVsc2UgaWYgKHNlYXJjaExpc3QubGVuZ3RoIDwgMSkge1xuXHRcdCBcdFx0Y29uc29sZS5sb2coJ21vdmllIG5vdCBmb3VuZCcpXG5cdFx0IFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQgXHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnU29ycnksIHdlIGNhbm5vdCBmaW5kIHRoYXQgbW92aWUnfV1cblx0XHQgXHRcdH0pXG5cdFx0IFx0fWVsc2Uge1xuXHRcdCBcdFx0Y29uc29sZS5sb2coJ3Jlc2V0Jylcblx0XHQgXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdCBcdFx0XHRtb3ZpZXM6IG1vdmllc1xuXHRcdCBcdFx0fSlcblx0XHQgXHR9XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwidGl0bGVcIj4gXG5cdFx0XHRcdFx0TW92aWUgTGlzdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEFkZFRvTGlzdCBlbnRyeT17dGhpcy5oYW5kbGVFbnRyeS5iaW5kKHRoaXMpfSBhZGQ9e3RoaXMuaGFuZGxlQWRkVG9MaXN0LmJpbmQodGhpcyl9IHN0YXRlPXt0aGlzLnN0YXRlfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il19