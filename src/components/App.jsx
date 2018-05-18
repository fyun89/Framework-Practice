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
	render() {
		return(
			<div>
				<div id="title"> 
					Movie List
				</div>
				<MovieList movies={this.state.movies} />
			</div>
		)
	}
}