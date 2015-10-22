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
    this.on('dequeue', function(song){
      this.remove(song);
  });
    // this.on('playFirst', function(song){
    //   this.play(song);
    // })
  },

  playFirst: function(){
    // console.log('ended', this)

    this.at(0).play();
  },
// 
  ended: function(){
    this.shift();
    
    // this.on('ended', function(){
      // this.splice(0,1);
    // })
  },
  // play: function(){

  // }
});

//brb, need to move car 
//dequeue is an event, 
//.remove is existing method

//this.on("dequeue", function(song){
//   this.remove(song);
// });
