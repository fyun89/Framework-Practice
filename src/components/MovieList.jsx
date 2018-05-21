var MovieList = (props) => {
	return(
		<table id="table" className='movie-list'>
			<tbody>
			{props.movies.map(
				function(movie, i) {
					var index = i
					return (<tr key={movie.title}><td ><button id="watchToggle" onClick={(i)=>{props.watch(index)}}>Watched</button>{movie.title}</td></tr>)
				}
			)}
			</tbody>
		</table>
	);
};

window.MovieList = MovieList;