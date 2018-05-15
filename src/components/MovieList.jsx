var MovieList = (props) => {
	return(
		<div className='movie-list'>
			{props.movies.map(
				function(movie) {
					return (<VideoListEntry movie={movie} />)
				}
			)}
		</div>
	);
};

window.MovieList = MovieList;