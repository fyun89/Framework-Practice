var MovieList = (props) => {
	return(
		<div className='movie-list'>
			{props.movies.map(
				function(movie) {
					return (<div> {movie} </div>)
				}
			)}
		</div>
	);
};

window.MovieList = MovieList;