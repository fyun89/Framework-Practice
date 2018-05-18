'use strict';

var MovieList = function MovieList(props) {
	return React.createElement(
		'table',
		{ className: 'movie-list' },
		React.createElement(
			'tbody',
			null,
			props.movies.map(function (movie) {
				return React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						movie
					)
				);
			})
		)
	);
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLFFBQ0M7QUFBQTtBQUFBLElBQU8sV0FBVSxZQUFqQjtBQUNDO0FBQUE7QUFBQTtBQUNDQSxTQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FDQSxVQUFTQyxLQUFULEVBQWdCO0FBQ2YsV0FBUTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBS0E7QUFBTDtBQUFKLEtBQVI7QUFDQSxJQUhEO0FBREQ7QUFERCxFQUREO0FBV0EsQ0FaRDs7QUFjQUMsT0FBT0wsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHRhYmxlIGNsYXNzTmFtZT0nbW92aWUtbGlzdCc+XG5cdFx0XHQ8dGJvZHk+XG5cdFx0XHR7cHJvcHMubW92aWVzLm1hcChcblx0XHRcdFx0ZnVuY3Rpb24obW92aWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gKDx0cj48dGQ+e21vdmllfTwvdGQ+PC90cj4pXG5cdFx0XHRcdH1cblx0XHRcdCl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59O1xuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==