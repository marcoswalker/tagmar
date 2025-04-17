/**
* Define a set of template paths to pre-load
* Pre-loaded templates are compiled and cached for fast access when rendering
* @return {Promise}
*/
export const preloadHandlebarsTemplates = async function() {
	return loadTemplates([

        "systems/tagmar/templates/sheets/personagem-sheet.hbs",
        "systems/tagmar/templates/sheets/npc-sheet.hbs",
        "systems/tagmar/templates/sheets/inventario-sheet.hbs",
        "systems/tagmar/templates/sheetsPoints/personagem-sheet.hbs",

        "systems/tagmar/templates/sheets/combate-sheet.hbs",
        "systems/tagmar/templates/sheets/defesa-sheet.hbs",
        "systems/tagmar/templates/sheets/habilidade-sheet.hbs",
        "systems/tagmar/templates/sheets/magia-sheet.hbs",
        "systems/tagmar/templates/sheets/pertence-sheet.hbs",
        "systems/tagmar/templates/sheets/profissao-sheet.hbs",
        "systems/tagmar/templates/sheets/raca-sheet.hbs",
        "systems/tagmar/templates/sheets/tecnicascombate-sheet.hbs",
        "systems/tagmar/templates/sheets/tecnica_combate-sheet.hbs",
        "systems/tagmar/templates/sheets/transporte-sheet.hbs",
        "systems/tagmar/templates/sheets/efeito-sheet.hbs"
	]);
};