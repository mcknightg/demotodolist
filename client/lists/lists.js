Template.lists.events({
	'keyup .name':function(evt,tmpl){
		if(evt.which === 13){
			var name = tmpl.find('.name').value;
			Lists.insert({name:name});
		}
	}
});
Template.lists.lists = function(){
	return Lists.find();
}
Template.listitem.events({
	'click .list':function(evt,tmpl){
		Session.set('listid',this._id);
	},
	'click .removelist':function(evt,tmpl){
		Lists.remove({_id:this._id});
	}
})