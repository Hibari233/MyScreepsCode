var modern_transporter = {
    run: function(creep, _idget, _idput, _type, _forcemove, _back) {
        if(creep.ticksToLive < 250 && creep.store.getUsedCapacity() == 0) {creep.suicide();}

        if(creep.memory.transport && creep.store.getUsedCapacity() == 0) {
            creep.memory.transport = false;
	    }
	    if(!creep.memory.transport && creep.store.getFreeCapacity() == 0) {
	        creep.memory.transport = true;
        }
        var source = Game.getObjectById(_idget);
        if(source == undefined) {
            creep.say("No Visual");
            return;
        }
        if(_type != 'ALL'){
            if(_forcemove == true || source.store.getUsedCapacity(_type) == 0) creep.memory.transport = true;
        }
        else{
            if(_forcemove == true || source.store.getUsedCapacity() == 0) creep.memory.transport = true;
        }
        if(creep.memory.transport || _back == true) {
            var str = Game.getObjectById(_idput);
            if(_type == 'ALL') {
                for(var name of RESOURCES_ALL) {
                    if(creep.store.getUsedCapacity(name) > 0) {
                        if(creep.transfer(str,name) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5, reusePath: 50}});
                        }
                    }
                }
            }
            else {
                var str = Game.getObjectById(_idput);
                if(creep.transfer(str, _type) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5, reusePath: 50}});
                }
            }
        }
        else {
            var str = Game.getObjectById(_idget);
            if(_type == 'ALL') {
                for(var name of RESOURCES_ALL) {
                    if(str.store.getUsedCapacity(name) > 0) {
                        if(creep.withdraw(str,name) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5, reusePath: 50}});
                        }
                    }
                }
            }
            else {
                var str = Game.getObjectById(_idget);
                if(creep.withdraw(str,_type) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(str, {visualizePathStyle: {stroke: '#f6b352', opacity: .5, reusePath: 50}});
                }
            }
        }
	}
};

module.exports = modern_transporter;