// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    })

    this.on('ended', function(){
    if(this.length > 1){
      this.ended();
      this.playFirst();
    }else{
      this.ended();
    }
  });
  },

  playFirst: function(){
    // console.log('ended', this)
  },



  ended: function(){
    this.shift();
    // this.on('ended', function(){
      // this.splice(0,1);
      console.log('SongQueue');
    // })
  }
});
