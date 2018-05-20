"use strict";

var MovieList = function MovieList(props) {
	return React.createElement(
		"table",
		{ id: "table", className: "movie-list" },
		React.createElement(
			"tbody",
			null,
			props.movies.map(function (movie, i) {
				return React.createElement(
					"tr",
					{ key: movie.title },
					React.createElement(
						"td",
						null,
						movie.title
					)
				);
			})
		)
	);
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImkiLCJ0aXRsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLFFBQ0M7QUFBQTtBQUFBLElBQU8sSUFBRyxPQUFWLEVBQWtCLFdBQVUsWUFBNUI7QUFDQztBQUFBO0FBQUE7QUFDQ0EsU0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQ0EsVUFBU0MsS0FBVCxFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDbEIsV0FBUTtBQUFBO0FBQUEsT0FBSSxLQUFLRCxNQUFNRSxLQUFmO0FBQXNCO0FBQUE7QUFBQTtBQUFNRixZQUFNRTtBQUFaO0FBQXRCLEtBQVI7QUFDQSxJQUhEO0FBREQ7QUFERCxFQUREO0FBV0EsQ0FaRDs7QUFjQUMsT0FBT1AsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHRhYmxlIGlkPVwidGFibGVcIiBjbGFzc05hbWU9J21vdmllLWxpc3QnPlxuXHRcdFx0PHRib2R5PlxuXHRcdFx0e3Byb3BzLm1vdmllcy5tYXAoXG5cdFx0XHRcdGZ1bmN0aW9uKG1vdmllLCBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuICg8dHIga2V5PXttb3ZpZS50aXRsZX0+PHRkID57bW92aWUudGl0bGV9PC90ZD48L3RyPilcblx0XHRcdFx0fVxuXHRcdFx0KX1cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblx0KTtcbn07XG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3Q7Il19