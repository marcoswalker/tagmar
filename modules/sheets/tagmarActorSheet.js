export default class tagmarActorSheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
        classes: ["tagmar", "sheet", "actor"],
        //width: 900,
        height: 990,
        tabs: [{
            navSelector: ".prim-tabs",
            contentSelector: ".sheet-primary",
            initial: "basico"
            }]
        });
    }
    get template() {
        return 'systems/tagmar/templates/sheets/'+ this.actor.data.type.toLowerCase() +'-sheet.hbs';
    }

    getData() {
        const data = super.getData();
        data.dtypes = ["String", "Number", "Boolean"];
         // Prepare items.
        if (this.actor.data.type == 'Personagem') {
            this._prepareCharacterItems(data);
            var actor_carga = 0;    // Atualiza Carga e verifica Sobrecarga
            var cap_transp = 0;
            var cap_usada = 0;
            var absorcao = 0;
            var def_pasVal = 0;
            var def_pasCat = "";
            if (data.actor.combate.length > 0){
                data.actor.combate.forEach(function(item){
                    actor_carga += item.data.peso;
                });
            }
            if (data.actor.defesas.length > 0){
                data.actor.defesas.forEach(function(item){
                    actor_carga += item.data.peso;
                    absorcao += item.data.absorcao;
                    def_pasVal += item.data.defesa_base.valor;
                    if (item.data.defesa_base.tipo != ""){
                        def_pasCat = item.data.defesa_base.tipo;
                    }
                });
            }
            if (data.actor.pertences.length > 0){
                data.actor.pertences.forEach(function(item){
                    actor_carga += item.data.peso * item.data.quant;
                });
            }
            if (data.actor.transportes.length > 0){
                data.actor.transportes.forEach(function(item){
                    cap_transp += item.data.capacidade.carga;
                });
            }
            if (data.actor.pertences_transporte.length > 0){
                data.actor.pertences_transporte.forEach(function(item){
                    cap_usada += item.data.peso * item.data.quant;
                });
            }
            this.actor.update({
                "data.d_passiva.valor": def_pasVal,
                "data.d_passiva.categoria": def_pasCat,
                "data.carga_transp.value": cap_usada,
                "data.carga_transp.max": cap_transp,
                "data.carga.value": actor_carga,
                "data.absorcao.max": absorcao
            });
            if (cap_transp > 0 && cap_usada < cap_transp) {
                this.actor.update({
                    "data.carga_transp.hasTransp": true
                });
            } else {
                this.actor.update({
                    "data.carga_transp.hasTransp": false
                });
            }
            /*this.actor.update({
                "data.carga.sobrecarga": false
            });*/

        }
        

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
        if (!this.options.editable) return;

        html.find(".profissao").change(ev => {
            //const profissao = ev.currentTarget.value;
            const especializacao = html.find(".especializacao");
            $(especializacao).val("");
        });
        // Update Inventory Item
        html.find('.item-edit').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.getOwnedItem(li.data("itemId"));
            item.sheet.render(true);
        });
  
        // Delete Inventory Item
        html.find('.item-delete').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            this.actor.deleteOwnedItem(li.data("itemId"));
            li.slideUp(200, () => this.render(false));
        });


        html.find('.rollable').click(this._onRoll.bind(this));

        html.find(".movePertence").click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.getOwnedItem(li.data("itemId"));
            if (this.actor.data.data.carga_transp.hasTransp){
                if (!item.data.data.inTransport) {
                    item.update({
                        "data.inTransport": true
                    });
                } else {
                    item.update({
                        "data.inTransport": false
                    });
                }
            }
        });

    }

    _prepareCharacterItems(sheetData) {
        const actorData = sheetData.actor;
        const combate = [];
        const magias = [];
        const h_prof = [];
        const h_man = [];
        const h_con = [];
        const h_sub = [];
        const h_inf = [];
        const h_geral = [];
        const tecnicas = [];
        const defesas = [];
        const transportes = [];
        const pertences = [];
        const pertences_transporte = [];
        const itens = sheetData.items;
        itens.forEach(function(item, indice, array) {
            if (item.type == "Combate"){
                combate.push(item);
            } else if (item.type == "Magia") {
                magias.push(item);
            } else if (item.type == "Habilidade") {
                if (item.data.tipo == "profissional") h_prof.push(item);
                else if (item.data.tipo == "manobra") h_man.push(item);
                else if (item.data.tipo == "conhecimento") h_con.push(item);
                else if (item.data.tipo == "subterfugio") h_sub.push(item);
                else if (item.data.tipo == "influencia") h_inf.push(item);
                else if (item.data.tipo == "geral") h_geral.push(item);
            } else if (item.type == "TecnicasCombate") { 
                tecnicas.push(item);
            } else if (item.type == "Defesa") {
                defesas.push(item);
            } else if (item.type == "Transporte") {
                transportes.push(item);
            } else if (item.type == "Pertence") {
                if (item.data.inTransport) pertences_transporte.push(item);
                else pertences.push(item);
            } 
        });
        actorData.pertences_transporte = pertences_transporte;
        actorData.pertences = pertences;
        actorData.defesas = defesas;
        actorData.transportes = transportes;
        actorData.tecnicas = tecnicas;
        actorData.h_prof = h_prof;
        actorData.h_man = h_man;
        actorData.h_con = h_con;
        actorData.h_sub = h_sub;
        actorData.h_inf = h_inf;
        actorData.h_geral = h_geral;
        actorData.combate = combate;
        actorData.magias = magias;
    }

    _onRoll(event, actor = null) {
        actor = !actor ? this.actor : actor;
    
        // Initialize variables.
        event.preventDefault();
    
        if (!actor.data) {
          return;
        }
        const a = event.currentTarget;
        const data = a.dataset;
        const actorData = actor.data.data;
        const itemId = $(a).parents('.item').attr('data-item-id');
        const item = actor.getOwnedItem(itemId);
        console.log(item);
    }    
}