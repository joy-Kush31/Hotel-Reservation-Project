$('#modalCOTabs a').click(function (e) {
	e.preventDefault();
  
	var url = $(this).attr("data-url");
  	var href = this.hash;
  	var pane = $(this);
	
	// ajax load from data-url
	$(href).load(url,function(result){      
	    pane.tab('show');
	});
});

// load first tab content
$('#ModalCheckOut').load($('.activeC a').attr("data-url"),function(result){
  $('.activeC a').tab('show');
});