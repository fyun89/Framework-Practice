"use strict";

var Search = function Search(props) {
	//console.log(props.search, "this is prop")
	return React.createElement(
		"form",
		null,
		React.createElement("input", { id: "searchBox", type: "text", placeholder: "Search", onChange: props.search }),
		React.createElement("input", { type: "submit", value: "Go!" })
	);
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzZWFyY2giLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN2QjtBQUNBLFFBQ0M7QUFBQTtBQUFBO0FBQ0MsaUNBQU8sSUFBRyxXQUFWLEVBQXNCLE1BQUssTUFBM0IsRUFBa0MsYUFBWSxRQUE5QyxFQUF1RCxVQUFVQSxNQUFNQyxNQUF2RSxHQUREO0FBRUMsaUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0I7QUFGRCxFQUREO0FBTUEsQ0FSRDs7QUFVQUMsT0FBT0gsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9IChwcm9wcykgPT4ge1xuXHQvL2NvbnNvbGUubG9nKHByb3BzLnNlYXJjaCwgXCJ0aGlzIGlzIHByb3BcIilcblx0cmV0dXJuKFxuXHRcdDxmb3JtPlxuXHRcdFx0PGlucHV0IGlkPVwic2VhcmNoQm94XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIG9uQ2hhbmdlPXtwcm9wcy5zZWFyY2h9IC8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR28hXCIgLz5cblx0XHQ8L2Zvcm0+XG5cdClcbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=