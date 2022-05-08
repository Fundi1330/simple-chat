//player join to server
mc.listen('onJoin', function(Player){
    mc.broadcast('§2 + ' + '§e' + Player.realName + ' §9Присоеденился к серверу')
    return false
})
//player left from server
mc.listen('onLeft', function(Player){
    mc.broadcast('§4 - ' + '§e' + Player.realName + ' §9Вышел с сервера')
    return false
})
mc.listen('onChat', function(Player, msg) {
    //world
    if(Player.pos.dimid == 0){
      mc.broadcast('§a' + Player.realName + ' §6➝ ' + '§9' + msg)
    }
    //nether
    if(Player.pos.dimid == 1){
      mc.broadcast('§4' + Player.realName + ' §6➝ ' + '§9' + msg)
    }
    //end
    if(Player.pos.dimid == 2){
      mc.broadcast('§5' + Player.realName + ' §6➝ ' + '§9' + msg)
    }
    return false
})