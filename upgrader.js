var upgrader = {
    run: function(creep) {
        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            //creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        //creep.say('⚡ upgrade');
	    }

	    if(creep.memory.upgrading) {
            var _controller = Game.getObjectById(creep.memory.controller);
            if(creep.upgradeController(_controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(_controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var source = Game.getObjectById(creep.memory.source);
            if(creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source,{visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
	}
};

module.exports = upgrader;