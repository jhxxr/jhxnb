function playMusic() {
    var audioEle = document.getElementById("audio");
  if (audioEle.paused){
    audioEle.play();
  }else {
    audioEle.pause();
  }
}

$("#music").click(function(){
  play();
});

var player = document.getElementById("audio");
play();
function play(){
swal("欢迎访问  星染的主页\n请问是否能开启音乐\n一边浏览一边听呢？", {
        buttons: {
            cancel: "开启",
            allow: "关闭"
        }
    }).then(function(value) {
        if (value == "allow") {
            player.pause()
        } else {
            player.play();
        }
    });
}
