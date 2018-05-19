"use strict";

var MovieList = function MovieList(props) {
	return React.createElement(
		"table",
		{ id: "table", className: "movie-list" },
		React.createElement(
			"tbody",
			null,
			props.movies.map(function (movie) {
				return React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						movie
					)
				);
			})
		)
	);
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLFFBQ0M7QUFBQTtBQUFBLElBQU8sSUFBRyxPQUFWLEVBQWtCLFdBQVUsWUFBNUI7QUFDQztBQUFBO0FBQUE7QUFDQ0EsU0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQ0EsVUFBU0MsS0FBVCxFQUFnQjtBQUNmLFdBQVE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQU1BO0FBQU47QUFBSixLQUFSO0FBQ0EsSUFIRDtBQUREO0FBREQsRUFERDtBQVdBLENBWkQ7O0FBY0FDLE9BQU9MLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuKFxuXHRcdDx0YWJsZSBpZD1cInRhYmxlXCIgY2xhc3NOYW1lPSdtb3ZpZS1saXN0Jz5cblx0XHRcdDx0Ym9keT5cblx0XHRcdHtwcm9wcy5tb3ZpZXMubWFwKFxuXHRcdFx0XHRmdW5jdGlvbihtb3ZpZSkge1xuXHRcdFx0XHRcdHJldHVybiAoPHRyPjx0ZCA+e21vdmllfTwvdGQ+PC90cj4pXG5cdFx0XHRcdH1cblx0XHRcdCl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59O1xuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==