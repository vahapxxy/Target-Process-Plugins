define(["./component.tracking","./spy.event"],function(tracking,spyEvent){var single=null,api={start:function(config){return single||(config=config||{},single=tracking.create(config)),single}};return spyEvent.done(function(config){api.start(config)}),api})