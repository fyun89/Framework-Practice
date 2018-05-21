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
			movies.push({title: contextAbove, watched: false});
			this.setState({movies: movies});
		}
		this.setState({addToList: ''})
		//console.log(duplicate);
		//movies.push({title: this.state.addToList})
		console.log(movies);
	}


	handleSearch(event) {
			event.preventDefault();
		 	var searchList = [];
		 	var noMovieFound = "no movie is found"

		 	for (var i = 0; i < movies.length; i++) {
		 		if (movies[i].title.toLowerCase().includes(event.target.value.toLowerCase())) {
		 			//console.log(event.target.value)
		 			//potential problem observed - need to find a way to prevent blank movie title to be added
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

	handleWatchButton(i) {
		console.log('clicked video: ' + this.state.movies[i].title)
		var movieToggle = this.state.movies[i].watched
		console.log('before movie toggle is :' + movieToggle)
		console.log('movie is: ' + this.state.movies[i].title)
		if (movieToggle = false) {
			this.setState({movieToggle: true}, ()=>{
				console.log(this.state.movies[i].watched)
			})
			console.log('in false case: ' + this.state.movies[i])
		}else{
			//this.state.movies[i].watched = false
			this.setState({movieToggle: false})
			console.log('in true case: ' + this.state.movies[i])
		}

		console.log('after toggled: ' + movieToggle)
		// if (movieToggle) {
		// 	movieToggle = false;
		// 	console.log('toggled to false', movieToggle)
		// } else {
		// 	movieToggle = true;
		// 	console.log('toggled to true', movieToggle)
		// }
		// console.log('after toggled: ' + movieToggle, this.state.movies[i].watched)
	}


	render() {
		return(
			<div>
				<div id="title"> 
					Movie List
				</div>
				<div>
					<AddToList entry={this.handleEntry.bind(this)} add={this.handleAddToList.bind(this)} state={this.state} />
				</div>
				<div>
					<Search search={this.handleSearch.bind(this)} />
				</div>
				<div>
					<WatchStatus />
				</div>
				<div>
					<MovieList movies={this.state.movies} watch={this.handleWatchButton.bind(this)}/>
				</div>
			</div>
		)
	}
}