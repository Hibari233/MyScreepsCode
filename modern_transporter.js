var modern_transporter = {
    run: function(creep, _idget, _idput, _type, _forcemove, _back) {
        if(creep.ticksToLive < 200 && creep.store[_type] == 0) {creep.suicide();}

        if(creep.memory.transport && creep.store[_type] == 0) {
            creep.memory.transport = false;
	    }
	    if(!creep.memory.transport && creep.store.getFreeCapacity() == 0) {
	        creep.memory.transport = true;
        }
        if(_forcemove == true) creep.memory.transport = true;
        if(_back == true){
            var str = Game.getObjectById(_idget);
            if(creep.transfer(str, _type) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
        }
	    else if(creep.memory.transport) {
            var str = Game.getObjectById(_idput);
            if(creep.transfer(str, _type) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
        }
        else {
            var str = Game.getObjectById(_idget);
            if(creep.withdraw(str,_type) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5}});
            }
        }
	}
};

module.exports = modern_transporter;