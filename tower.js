const { random } = require("lodash");

var tower = {
    run: function(tower, ramhp, wallhp) {
        var structures = tower.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_ROAD ||
                        structure.structureType == STRUCTURE_WALL && structure.hits < wallhp ||
                        structure.structureType == STRUCTURE_RAMPART && structure.hits < ramhp) &&
                        structure.hits < structure.hitsMax;
                }
        });
        var hostile = tower.room.find(FIND_HOSTILE_CREEPS);
        var power_hostile = tower.room.find(FIND_HOSTILE_POWER_CREEPS);
        hostile.concat(power_hostile);
        var friends = tower.room.find(FIND_MY_CREEPS, {
            filter: (creep) => {
                return creep.hits < creep.hitsMax;
            }
        });
        if(hostile[0]) {
            var a = random(0,3);
            tower.attack(hostile[a]);
            //tower.heal(friends[0]);
        }
        else{
            tower.repair(structures[0]);
        }
	}
};

module.exports = tower;