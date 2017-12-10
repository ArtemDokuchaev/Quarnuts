var NavigationList = document.getElementsByTagName( 'nav' );

for ( var i = 0; i < NavigationList.length; i++ ) {
	
	NavigationList[ i ].ondragstart = function() {
	    return false;
	};

}
