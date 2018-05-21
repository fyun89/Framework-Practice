"use strict";

var MovieList = function MovieList(props) {
	return React.createElement(
		"table",
		{ id: "table", className: "movie-list" },
		React.createElement(
			"tbody",
			null,
			props.movies.map(function (movie, i) {
				var index = i;
				return React.createElement(
					"tr",
					{ key: movie.title },
					React.createElement(
						"td",
						null,
						React.createElement(
							"button",
							{ id: "watchToggle", onClick: function onClick(i) {
									props.watch(index);
								} },
							"Watched"
						),
						movie.title
					)
				);
			})
		)
	);
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImkiLCJpbmRleCIsInRpdGxlIiwid2F0Y2giLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUMxQixRQUNDO0FBQUE7QUFBQSxJQUFPLElBQUcsT0FBVixFQUFrQixXQUFVLFlBQTVCO0FBQ0M7QUFBQTtBQUFBO0FBQ0NBLFNBQU1DLE1BQU4sQ0FBYUMsR0FBYixDQUNBLFVBQVNDLEtBQVQsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ2xCLFFBQUlDLFFBQVFELENBQVo7QUFDQSxXQUFRO0FBQUE7QUFBQSxPQUFJLEtBQUtELE1BQU1HLEtBQWY7QUFBc0I7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLFNBQVEsSUFBRyxhQUFYLEVBQXlCLFNBQVMsaUJBQUNGLENBQUQsRUFBSztBQUFDSixlQUFNTyxLQUFOLENBQVlGLEtBQVo7QUFBbUIsU0FBM0Q7QUFBQTtBQUFBLE9BQUw7QUFBbUZGLFlBQU1HO0FBQXpGO0FBQXRCLEtBQVI7QUFDQSxJQUpEO0FBREQ7QUFERCxFQUREO0FBWUEsQ0FiRDs7QUFlQUUsT0FBT1QsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHRhYmxlIGlkPVwidGFibGVcIiBjbGFzc05hbWU9J21vdmllLWxpc3QnPlxuXHRcdFx0PHRib2R5PlxuXHRcdFx0e3Byb3BzLm1vdmllcy5tYXAoXG5cdFx0XHRcdGZ1bmN0aW9uKG1vdmllLCBpKSB7XG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gaVxuXHRcdFx0XHRcdHJldHVybiAoPHRyIGtleT17bW92aWUudGl0bGV9Pjx0ZCA+PGJ1dHRvbiBpZD1cIndhdGNoVG9nZ2xlXCIgb25DbGljaz17KGkpPT57cHJvcHMud2F0Y2goaW5kZXgpfX0+V2F0Y2hlZDwvYnV0dG9uPnttb3ZpZS50aXRsZX08L3RkPjwvdHI+KVxuXHRcdFx0XHR9XG5cdFx0XHQpfVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHQpO1xufTtcblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDsiXX0=