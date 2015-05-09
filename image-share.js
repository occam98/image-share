 Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});



Photos = new Mongo.Collection("photos");
Photos.attachSchema(new SimpleSchema({
  userId:{
	type: String,
	autoValue:function(){return this.userId},
	
  },
  username:{
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
    type: String
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

}




/*
if (Meteor.isClient) {
  
	Template.imagesS
	ubmitted.helpers({
   images: Images.find() 
    
});
*/
    

/*    
    
Template.imagesSubmitted.events({
   
'dblclick .uploadedImage': function(e){
 
    Images.remove({_id:this._id});
    
}

    
});

*/

/*    
Template.form.events({

'click input[type=submit]': function(event, template) {
	
	console.log("form submit")
    event.preventDefault();
    
    FS.Utility.eachFile(event, function(file) {
	    
	    
      Images.insert(file, function (err, fileObj){
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
         
    });
        
  }   
  
    
});
   

 
    
    
*/
