
 Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

Photos = new Mongo.Collection("photos");
Photos.attachSchema(new SimpleSchema({
  userId:{
	type: String,
	autoValue:function(){return this.userId},
	
  },
  userName:{
	  type: String,
	  autoValue:function(){return Meteor.users.findOne({_id: this.userId}).username},
  },
  
  groupMembers: {
    type: String
  },
  comments: {
	type: String,  
	autoform:{
		rows: 5
	}
  },
  fileId: {
    type: String,
    autoform: {
	    afFieldInput:{
		    type: "cfs-file",
		    collection: "images"
	    }
    }
  }
}));




Images.allow({
  download: function () {
    return true;
  },
  fetch: null
});


if(Meteor.isClient){
	
	Accounts.ui.config({
		  passwordSignupFields: "USERNAME_ONLY"
	});  
	
	//problem is here
	Template.imagesSubmitted.helpers({
	   photos: function(){return Photos.find();}, 
	   imageURL: function(){return Images.findOne().url();
	    }
	});
	 
	 
	 
	 Template.photo.photo=function(){
		 return Meteor.users.findOne({_id: this.userId}).username;
		
		 
		 
		 
	 };
	 
	 
	 
	 
	 Template.imagesSubmitted.events({
	   
	'dblclick .uploadedImage': function(e){
	 
	    Images.remove({_id:this._id});
	    Photos.remove({_id:this._id});
	    
	}
	
	
	    
	});


}


   

 
    
 