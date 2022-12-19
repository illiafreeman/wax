{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	"fdc": {
		"prefix": "fdc",
		"body": [
			"flex-direction: column;",
		]
	},
	"fc": {
		"prefix": "fc",
		"body": [
			"display: flex;",
			"justify-content: center;",
        	"align-items: center;"
		]
	},
	"por": {
		"prefix": "por",
		"body": [
			"position: relative;",
		]
	},
	"poa": {
		"prefix": "poa",
		"body": [
			"position: absolute;",
		]
	},
	"af": {
		"prefix": "af",
		"body": [
			"&:after{",
			"    content: '';",
			"    display: block;",
			"    position: absolute;",
			"    width: 29px;",
            "    height: 29px;",
            "    background: url(../img/icon_st.svg) no-repeat center center / contain;",
            "    top: 3px;",
            "    left: 5px;",
			"}"
		]
	},
	"li": {
		"prefix": "li",
		"body": [
			"&:before{",
			"    content: '';",
			"    width: 0;",
			"    height: 1px;",
			"    position: absolute;",
			"    bottom: 3px;",
			"    right: 0;",
			"    background: #fff;",
			"    transition: all 0.2s ease-in-out;",
			"}",
			"&:hover{",
			"    &:before{",
			"        width: 100%;",
			"        left: 0;",
			"    }",
			"}"
		]
	},
}