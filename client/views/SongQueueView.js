// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",

  initialize: function() {
this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
   
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});

//      this.$el.children().detach();
//    console.log('songquevewthis', this);
//    if(this.collection!== undefined){
//     this.$el.html('<th>Queue</th>').append(
//       this.collection.map(function(song){
//           return new SongQueueEntryView({model: song}).render();
//       // return this.$el;
//       })

//     );
//   } else {
//     this.$el.html('<th>Queue</th>')
// return this.$el.attr(this.model ? this.model.get('url') : '');  }
//   }


// });