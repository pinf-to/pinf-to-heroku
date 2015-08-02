#!/bin/bash
# Source https://github.com/cadorn/bash.origin
. "$HOME/.bash.origin"
function init {
	eval BO_SELF_BASH_SOURCE="$BO_READ_SELF_BASH_SOURCE"
	BO_deriveSelfDir ___TMP___ "$BO_SELF_BASH_SOURCE"
	local __BO_DIR__="$___TMP___"


	function pushToHeroku {
		BO_format "$VERBOSE" "HEADER" "Pushing to Heroku"
		pushd "$__BO_DIR__" > /dev/null

		if ! BO_has heroku ; then
			echo "ERROR: 'heroku' command not found! Install Heroku toolbelt first: https://toolbelt.heroku.com/"
			exit 1
		fi

		heroku git:remote -a pinf-to-heroku
		git push heroku master

		popd > /dev/null
		BO_format "$VERBOSE" "FOOTER"
	}

	pushToHeroku

}
init $@