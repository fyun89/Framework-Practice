var MovieList = (props) => {
	return(
		<table id="table" className='movie-list'>
			<tbody>
			{props.movies.map(
				function(movie, i) {
					return (<tr key={movie.title}><td >{movie.title}</td></tr>)
				}
			)}
			</tbody>
		</table>
	);
};

window.MovieList = MovieList;