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
				movies.push({ title: contextAbove, watched: false });
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
			event.preventDefault();
			var searchList = [];
			var noMovieFound = "no movie is found";

			for (var i = 0; i < movies.length; i++) {
				if (movies[i].title.toLowerCase().includes(event.target.value.toLowerCase())) {
					//console.log(event.target.value)
					//potential problem observed - need to find a way to prevent blank movie title to be added
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
		key: 'handleWatchButton',
		value: function handleWatchButton(i) {
			var _this2 = this;

			console.log('clicked video: ' + this.state.movies[i].title);
			var movieToggle = this.state.movies[i].watched;
			console.log('before movie toggle is :' + movieToggle);
			console.log('movie is: ' + this.state.movies[i].title);
			if (movieToggle = false) {
				this.setState({ movieToggle: true }, function () {
					console.log(_this2.state.movies[i].watched);
				});
				console.log('in false case: ' + this.state.movies[i]);
			} else {
				//this.state.movies[i].watched = false
				this.setState({ movieToggle: false });
				console.log('in true case: ' + this.state.movies[i]);
			}

			console.log('after toggled: ' + movieToggle);
			// if (movieToggle) {
			// 	movieToggle = false;
			// 	console.log('toggled to false', movieToggle)
			// } else {
			// 	movieToggle = true;
			// 	console.log('toggled to true', movieToggle)
			// }
			// console.log('after toggled: ' + movieToggle, this.state.movies[i].watched)
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
				React.createElement(
					'div',
					null,
					React.createElement(AddToList, { entry: this.handleEntry.bind(this), add: this.handleAddToList.bind(this), state: this.state })
				),
				React.createElement(
					'div',
					null,
					React.createElement(Search, { search: this.handleSearch.bind(this) })
				),
				React.createElement(
					'div',
					null,
					React.createElement(WatchStatus, null)
				),
				React.createElement(
					'div',
					null,
					React.createElement(MovieList, { movies: this.state.movies, watch: this.handleWatchButton.bind(this) })
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImFkZFRvTGlzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnRleHRBYm92ZSIsIm5vdER1cGxpY2F0ZSIsImV2ZXJ5IiwiZWxlbSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwid2F0Y2hlZCIsInNlYXJjaExpc3QiLCJub01vdmllRm91bmQiLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJtb3ZpZVRvZ2dsZSIsImhhbmRsZUVudHJ5IiwiYmluZCIsImhhbmRsZUFkZFRvTGlzdCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZVdhdGNoQnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBRFc7QUFFWEMsY0FBVztBQUZBLEdBQWI7QUFGa0I7QUFNbEI7Ozs7OEJBRVdDLEssRUFBTTtBQUNqQkEsU0FBTUMsY0FBTjtBQUNBQyxXQUFRQyxHQUFSLENBQVksWUFBWixFQUEwQkgsTUFBTUksTUFBTixDQUFhQyxLQUF2QztBQUNBO0FBQ0E7QUFDQSxRQUFLQyxRQUFMLENBQWMsRUFBQ1AsV0FBV0MsTUFBTUksTUFBTixDQUFhQyxLQUF6QixFQUFkO0FBQ0E7QUFDQTs7O2tDQUVlTCxLLEVBQU07QUFDckJBLFNBQU1DLGNBQU47QUFDQSxPQUFJTSxlQUFlLEtBQUtWLEtBQUwsQ0FBV0UsU0FBOUI7QUFDQSxPQUFJUyxlQUFlVixPQUFPVyxLQUFQLENBQWEsVUFBU0MsSUFBVCxFQUFjO0FBQzdDLFdBQU9BLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxP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SUFBVyxPQUFPLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWxCLEVBQStDLEtBQUssS0FBS0MsZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBcEQsRUFBcUYsT0FBTyxLQUFLekIsS0FBakc7QUFERCxLQUpEO0FBT0M7QUFBQTtBQUFBO0FBQ0MseUJBQUMsTUFBRCxJQUFRLFFBQVEsS0FBSzJCLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQWhCO0FBREQsS0FQRDtBQVVDO0FBQUE7QUFBQTtBQUNDLHlCQUFDLFdBQUQ7QUFERCxLQVZEO0FBYUM7QUFBQTtBQUFBO0FBQ0MseUJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS3pCLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0MsT0FBTyxLQUFLMkIsaUJBQUwsQ0FBdUJILElBQXZCLENBQTRCLElBQTVCLENBQTdDO0FBREQ7QUFiRCxJQUREO0FBbUJBOzs7O0VBcEhnQkksTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdCAgbW92aWVzLFxuXHRcdCAgYWRkVG9MaXN0OiAnJyxcblx0XHR9O1xuXHR9XG5cblx0aGFuZGxlRW50cnkoZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2coJ2V2ZW50IGlzOiAnLCBldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdC8vY29uc29sZS5sb2coJ3N0YXRlIGlzOiAnLCB0aGlzLnN0YXRlLmFkZFRvTGlzdClcblx0XHQvL2NvbnNvbGUubG9nKCdjbGlja2VkIGFkZCBidXR0b24nKTtcblx0XHR0aGlzLnNldFN0YXRlKHthZGRUb0xpc3Q6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHRcdC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRUaXRsZSlcblx0fVxuXG5cdGhhbmRsZUFkZFRvTGlzdChldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgY29udGV4dEFib3ZlID0gdGhpcy5zdGF0ZS5hZGRUb0xpc3QgXG5cdFx0dmFyIG5vdER1cGxpY2F0ZSA9IG1vdmllcy5ldmVyeShmdW5jdGlvbihlbGVtKXtcblx0XHRcdHJldHVybiBlbGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkgIT09IGNvbnRleHRBYm92ZS50b0xvd2VyQ2FzZSgpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vdER1cGxpY2F0ZSkge1xuXHRcdFx0bW92aWVzLnB1c2goe3RpdGxlOiBjb250ZXh0QWJvdmUsIHdhdGNoZWQ6IGZhbHNlfSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IG1vdmllc30pO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHthZGRUb0xpc3Q6ICcnfSlcblx0XHQvL2NvbnNvbGUubG9nKGR1cGxpY2F0ZSk7XG5cdFx0Ly9tb3ZpZXMucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUuYWRkVG9MaXN0fSlcblx0XHRjb25zb2xlLmxvZyhtb3ZpZXMpO1xuXHR9XG5cblxuXHRoYW5kbGVTZWFyY2goZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0IFx0dmFyIHNlYXJjaExpc3QgPSBbXTtcblx0XHQgXHR2YXIgbm9Nb3ZpZUZvdW5kID0gXCJubyBtb3ZpZSBpcyBmb3VuZFwiXG5cblx0XHQgXHRmb3IgKHZhciBpID0gMDsgaSA8IG1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdCBcdFx0aWYgKG1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdCBcdFx0XHQvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHQgXHRcdFx0Ly9wb3RlbnRpYWwgcHJvYmxlbSBvYnNlcnZlZCAtIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IGJsYW5rIG1vdmllIHRpdGxlIHRvIGJlIGFkZGVkXG5cdFx0IFx0XHRcdHNlYXJjaExpc3QucHVzaChtb3ZpZXNbaV0pO1xuXHRcdCBcdFx0fVxuXHRcdCBcdH1cblxuXHRcdCBcdGlmIChzZWFyY2hMaXN0Lmxlbmd0aCA+IDApe1xuXHRcdCBcdFx0Y29uc29sZS5sb2coJ21vdmllIGZvdW5kJylcblx0XHRcdCBcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0IFx0XHRtb3ZpZXM6IHNlYXJjaExpc3Rcblx0XHRcdCBcdH0pXG5cdFx0IFx0fWVsc2UgaWYgKHNlYXJjaExpc3QubGVuZ3RoIDwgMSkge1xuXHRcdCBcdFx0Y29uc29sZS5sb2coJ21vdmllIG5vdCBmb3VuZCcpXG5cdFx0IFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQgXHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnU29ycnksIHdlIGNhbm5vdCBmaW5kIHRoYXQgbW92aWUnfV1cblx0XHQgXHRcdH0pXG5cdFx0IFx0fWVsc2Uge1xuXHRcdCBcdFx0Y29uc29sZS5sb2coJ3Jlc2V0Jylcblx0XHQgXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdCBcdFx0XHRtb3ZpZXM6IG1vdmllc1xuXHRcdCBcdFx0fSlcblx0XHQgXHR9XG5cblx0fVxuXG5cdGhhbmRsZVdhdGNoQnV0dG9uKGkpIHtcblx0XHRjb25zb2xlLmxvZygnY2xpY2tlZCB2aWRlbzogJyArIHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlKVxuXHRcdHZhciBtb3ZpZVRvZ2dsZSA9IHRoaXMuc3RhdGUubW92aWVzW2ldLndhdGNoZWRcblx0XHRjb25zb2xlLmxvZygnYmVmb3JlIG1vdmllIHRvZ2dsZSBpcyA6JyArIG1vdmllVG9nZ2xlKVxuXHRcdGNvbnNvbGUubG9nKCdtb3ZpZSBpczogJyArIHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlKVxuXHRcdGlmIChtb3ZpZVRvZ2dsZSA9IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZVRvZ2dsZTogdHJ1ZX0sICgpPT57XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzW2ldLndhdGNoZWQpXG5cdFx0XHR9KVxuXHRcdFx0Y29uc29sZS5sb2coJ2luIGZhbHNlIGNhc2U6ICcgKyB0aGlzLnN0YXRlLm1vdmllc1tpXSlcblx0XHR9ZWxzZXtcblx0XHRcdC8vdGhpcy5zdGF0ZS5tb3ZpZXNbaV0ud2F0Y2hlZCA9IGZhbHNlXG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZVRvZ2dsZTogZmFsc2V9KVxuXHRcdFx0Y29uc29sZS5sb2coJ2luIHRydWUgY2FzZTogJyArIHRoaXMuc3RhdGUubW92aWVzW2ldKVxuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKCdhZnRlciB0b2dnbGVkOiAnICsgbW92aWVUb2dnbGUpXG5cdFx0Ly8gaWYgKG1vdmllVG9nZ2xlKSB7XG5cdFx0Ly8gXHRtb3ZpZVRvZ2dsZSA9IGZhbHNlO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJ3RvZ2dsZWQgdG8gZmFsc2UnLCBtb3ZpZVRvZ2dsZSlcblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0bW92aWVUb2dnbGUgPSB0cnVlO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJ3RvZ2dsZWQgdG8gdHJ1ZScsIG1vdmllVG9nZ2xlKVxuXHRcdC8vIH1cblx0XHQvLyBjb25zb2xlLmxvZygnYWZ0ZXIgdG9nZ2xlZDogJyArIG1vdmllVG9nZ2xlLCB0aGlzLnN0YXRlLm1vdmllc1tpXS53YXRjaGVkKVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBpZD1cInRpdGxlXCI+IFxuXHRcdFx0XHRcdE1vdmllIExpc3Rcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PEFkZFRvTGlzdCBlbnRyeT17dGhpcy5oYW5kbGVFbnRyeS5iaW5kKHRoaXMpfSBhZGQ9e3RoaXMuaGFuZGxlQWRkVG9MaXN0LmJpbmQodGhpcyl9IHN0YXRlPXt0aGlzLnN0YXRlfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8U2VhcmNoIHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFdhdGNoU3RhdHVzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gd2F0Y2g9e3RoaXMuaGFuZGxlV2F0Y2hCdXR0b24uYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSJdfQ==