var MovieList = (props) => {
	return(
		<div className='movie-list'>
			{props.map(
				function(movie) {
					return (<MovieListEntry movie={movie} />)
				}
			)}
		</div>
	);
};

window.MovieList = MovieList;