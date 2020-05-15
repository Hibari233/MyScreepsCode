module.exports.stateScanner = function () {
    // 每 20 tick 运行一次
    if (Game.time % 20) return;
  
    if (!Memory.stats) Memory.stats = {}
    
    // 统计 GCL / GPL 的升级百分比和等级
    Memory.stats.gcl = (Game.gcl.progress / Game.gcl.progressTotal) * 100;
    Memory.stats.gclLevel = Game.gcl.level
    Memory.stats.gpl = (Game.gpl.progress / Game.gpl.progressTotal) * 100;
    Memory.stats.gplLevel = Game.gpl.level;
    // CPU 的当前使用量
    Memory.stats.cpu = Game.cpu.getUsed();
    // bucket 当前剩余量
    Memory.stats.bucket = Game.cpu.bucket;
    Memory.stats.energy_W22S8 = Game.rooms['W22S8'].storage.store.energy;
    Memory.stats.rcl_W22S8 = Game.rooms['W22S8'].controller.level;
    Memory.stats.rcl_progress_W22S8 = (Game.rooms['W22S8'].controller.progress/Game.rooms['W22S8'].controller.progressTotal) * 100;
    Memory.stats.rcl_W23S12 = Game.rooms['W23S12'].controller.level;
    Memory.stats.rcl_progress_W23S12 = (Game.rooms['W23S12'].controller.progress/Game.rooms['W23S12'].controller.progressTotal)*100
}