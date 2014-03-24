Template.todos.list = function(){
	return Lists.findOne({_id:Session.get('listid')});
}
Template.todos.todolist = function(){
	return Todos.find({listid:Session.get('listid')});
}
Template.todos.events({
	'keyup .todotext':function(evt,tmpl){
		if(evt.which === 13){
			var todotext = tmpl.find('.todotext').value;
			Todos.insert({todotext:todotext,listid:Session.get('listid'),done:false});
		}
	}
})
Template.todolistitem.editing_todo = function(){
	return Session.get('editing_todo');
}
Template.todolistitem.done_class = function(){
	return this.done ? 'done':'';
}
Template.todolistitem.done_checkbox = function(){
	return this.done ? 'checked="checked"':'';
}
Template.todolistitem.events({
	'click .removetodo':function(evt,tmpl){
		Todos.remove({_id:this._id});
	},
	'dblclick .todoitemtext':function(evt,tmpl){
		evt.preventDefault();
		Session.set('editing_todo',true);
	},
	'keyup .todotext':function(evt,tmpl){
		if(evt.which === 13){
			var todotext = tmpl.find('.todotext').value;
			Todos.update(this._id,{$set:{todotext:todotext,listid:Session.get('listid')}});
			Session.set('editing_todo',false);
		}
	},
	'click .check':function(evt,tmpl){
		evt.preventDefault();
		Todos.update(this._id,{$set:{done:!this.done}});
		
	}
})