class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  movies,
		  addToList: '',
		};
	}

	handleEntry(event){
		event.preventDefault();
		console.log('event is: ', event.target.value);
		//console.log('state is: ', this.state.addToList)
		//console.log('clicked add button');
		this.setState({addToList: event.target.value});
		//console.log(this.state.addTitle)
	}

	handleAddToList(event){
		event.preventDefault();
		var contextAbove = this.state.addToList 
		var notDuplicate = movies.every(function(elem){
			return elem.title.toLowerCase() !== contextAbove.toLowerCase();
		});

		if (notDuplicate) {
			movies.push({title: contextAbove});
			this.setState({movies: movies});
		}


		//console.log(duplicate);

		//movies.push({title: this.state.addToList})
		console.log(movies);
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
				<AddToList entry={this.handleEntry.bind(this)} add={this.handleAddToList.bind(this)} />
				<Search search={this.handleSearch.bind(this)} />
				<MovieList movies={this.state.movies} />
			</div>
		)
	}
}