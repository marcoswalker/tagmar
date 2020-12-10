import tagmarItemSheet from "./sheets/tagmarItemSheet.js";
import tagmarActorSheet from "./sheets/tagmarActorSheet.js";

Hooks.once("init", function(){

  CONFIG.Combat.initiative = {
    formula: "1d10 + @iniciativa",
    decimals: 2
  };

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("tagmar", tagmarItemSheet, {makeDefault: true});

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("tagmar", tagmarActorSheet, {makeDefault: true});

  Handlebars.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
  });
  
});
