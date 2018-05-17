'use strict';

var MovieList = function MovieList(props) {
	return React.createElement(
		'div',
		{ className: 'movie-list' },
		props.movies.map(function (movie) {
			return React.createElement(
				'div',
				null,
				' ',
				movie,
				' '
			);
		})
	);
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLFFBQ0M7QUFBQTtBQUFBLElBQUssV0FBVSxZQUFmO0FBQ0VBLFFBQU1DLE1BQU4sQ0FBYUMsR0FBYixDQUNBLFVBQVNDLEtBQVQsRUFBZ0I7QUFDZixVQUFRO0FBQUE7QUFBQTtBQUFBO0FBQU9BLFNBQVA7QUFBQTtBQUFBLElBQVI7QUFDQSxHQUhEO0FBREYsRUFERDtBQVNBLENBVkQ7O0FBWUFDLE9BQU9MLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtb3ZpZS1saXN0Jz5cblx0XHRcdHtwcm9wcy5tb3ZpZXMubWFwKFxuXHRcdFx0XHRmdW5jdGlvbihtb3ZpZSkge1xuXHRcdFx0XHRcdHJldHVybiAoPGRpdj4ge21vdmllfSA8L2Rpdj4pXG5cdFx0XHRcdH1cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==