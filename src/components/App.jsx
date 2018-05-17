class App extends React.Component {
	constructor() {
		super();
		this.state = {
		  movies: [
	      {title: 'Mean Girls'},
 		  {title: 'Hackers'},
  		  {title: 'The Grey'},
  		  {title: 'Sunshine'},
  		  {title: 'Ex Machina'},
  		  ]
		};
	}
	render() {
		return(

		<div>
			<MovieList movies={this.state.movies} />
		</div>

		)
	}
}