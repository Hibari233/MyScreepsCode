var scout = {
    run: function(creep) {
        var p = creep.memory.s;
        if(!creep.pos.inRangeTo(Game.flags[p].pos,1)) creep.moveTo(Game.flags[p]);
	}
};

module.exports = scout;