var transmitter = {
    run: function(creep) {
        var p = creep.memory.s;
        if(!creep.pos.inRangeTo(Game.flags[p].pos,24)) creep.moveTo(Game.flags[p]);
        else {
            if(creep.room.controller) {
                /*
                if(!creep.room.controller.my){
                    if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
                */
                if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
	}
};

module.exports = transmitter;