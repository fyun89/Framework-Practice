class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  movies : [
	      'Mean Girls',
 		  'Hackers',
  		  'The Grey',
  		  'Sunshine',
  		  'Ex Machina',
  		  ]
		};
	}


	handleSearch(event) {
		// //this.props.search(
		 	console.log(event.target.value, '<-- target value')
		 	console.log(this.state.movies.includes(event.target.value), '<- search')
			if (this.state.movies.includes(event.target.value){
				this.setState({
					movies: [
					'Mean Girls'
					]
				})
			} else {
				this.setState({
					movies : [
				      'Mean Girls',
			 		  'Hackers',
			  		  'The Grey',
			  		  'Sunshine',
			  		  'Ex Machina',
			  		]
				})
			}
		// )
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