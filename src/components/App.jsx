class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  movies
		};
	}


	handleSearch(event) {
		 	var searchList = [];
		 	var noMovieFound = "no movie is found"

		 	for (var i = 0; i < movies.length; i++) {
		 		if (movies[i].title.toLowerCase().includes(event.target.value.toLowerCase())) {
		 			searchList.push(movies[i]);
		 		}
		 	}

		 	if (searchList.length > 0){
		 		console.log('movie found')
			 	this.setState({
			 		movies: searchList
			 	})
		 	}else if (searchList.length < 1) {
		 		console.log('movie not found')
		 		this.setState({
		 			movies: [{title: 'Sorry, we cannot find that movie'}]
		 		})
		 	}else {
		 		console.log('reset')
		 		this.setState({
		 			movies: movies
		 		})
		 	}

	}

	render() {
		return(
			<div>
				<div id="title"> 
					Movie List
				</div>
				<Search search={this.handleSearch.bind(this)} />
				<MovieList movies={this.state.movies} />
			</div>
		)
	}
}