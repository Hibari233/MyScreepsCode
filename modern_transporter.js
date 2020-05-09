var modern_transporter = {
    run: function(creep, _idget, _idput, _type, _forcemove) {
        if(creep.ticksToLive < 200 && creep.store[_type] == 0) {creep.suicide();}

        if(creep.memory.transport && creep.store[_type] == 0) {
            creep.memory.transport = false;
	    }
	    if(!creep.memory.transport && creep.store.getFreeCapacity() == 0) {
	        creep.memory.transport = true;
        }
        if(_forcemove == true) creep.memory.transport = true;
	    if(creep.memory.transport) {
            var str = Game.getObjectById(_idput);
            if(creep.transfer(str, _type) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .1}});
            }
        }
        else {
            var str = Game.getObjectById(_idget);
            if(creep.withdraw(str,_type) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .1}});
            }
        }
	}
};

module.exports = modern_transporter;