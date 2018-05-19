var Search = (props) => {
	//console.log(props.search, "this is prop")
	return(
	<form action="something">
		<input id="searchBox" type="text" placeholder="Search" onChange={props.search} />
		<input type="submit" value="Go!" />
	</form>
	)
}

window.Search = Search;