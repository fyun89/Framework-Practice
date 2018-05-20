var AddToList = (props) => {
	//console.log(props.search, "this is prop")
	return(
		<form>
			<input id="addToList" type="text" onfocus="" value={props.state.addToList} placeholder="Add a new movie" onChange={props.entry} />
			<input type="submit" value='Add' onClick={props.add} />
		</form>
	)
}

window.AddToList = AddToList;