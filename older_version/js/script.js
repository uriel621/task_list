$(document).ready(function() {
	$('[required="required"]').prev('label').append( '<span>*</span>').children( 'span').addClass('required');
	$('tbody tr:even').addClass('even');
	
	$('#btnAddTask').click(function(para) {
		para.preventDefault();
		$('#taskCreation').removeClass('not');
	});
	
	$('tbody tr').click(function(para) {
		$(para.target).closest('td').siblings().andSelf().toggleClass('rowHighlight');
	});
	
	$('#tblTasks tbody').on('click', '.deleteRow', function(para) { 
	    para.preventDefault();
		$(para.target).parents('tr').remove(); 
	});
	
	$('#saveTask').click(function(para) {
		para.preventDefault();
		var task = $('form').toObject();
		$('#taskRow').tmpl(task).appendTo($('#tblTasks tbody'));
	});
});

(function($) {
	$.fn.extend({
		toObject: function() {
		    var result = {}
			$.each(this.serializeArray(), function(i, v) { 
				result[v.name] = v.value;
			});
			return result;
		},
		fromObject: function(obj) {
			$.each(this.find(':input'), function(i,v) {
				var name = $(v).attr('name');
				if (obj[name]) {
				     $(v).val(obj[name]);
				 } else {
					$(v).val('');
				 }
			});
		}
	});
})(jQuery);
