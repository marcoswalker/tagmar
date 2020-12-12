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
            this._prepareValorTeste(data);
            this._calculaAjuste(data);
            if (data.actor.data.raca != "") {
                this._preparaCaracRaciais(data);
            }
            const isso = this;
            var actor_carga = 0;    // Atualiza Carga e verifica Sobrecarga
            var cap_transp = 0;
            var cap_usada = 0;
            var absorcao = 0;
            var def_pasVal = 0;
            var def_pasCat = "";
            var valor_n = 0;
            if (data.actor.combate.length > 0){
                data.actor.combate.forEach(function(item){
                    actor_carga += item.data.peso;
                    if (item.data.tipo == "CD") {
                        valor_n = data.actor.data.grupos.CD;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CI") {
                        valor_n = data.actor.data.grupos.CI;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CI") {
                        valor_n = data.actor.data.grupos.CI;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CL") {
                        valor_n = data.actor.data.grupos.CL;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CLD") {
                        valor_n = data.actor.data.grupos.CLD;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "EL") {
                        valor_n = data.actor.data.grupos.EL;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CmE") {
                        valor_n = data.actor.data.grupos.CmE;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CmM") {
                        valor_n = data.actor.data.grupos.CmM;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "EM") {
                        valor_n = data.actor.data.grupos.EM;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "PmA") {
                        valor_n = data.actor.data.grupos.PmA;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "PmL") {
                        valor_n = data.actor.data.grupos.PmL;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CpE") {
                        valor_n = data.actor.data.grupos.CpE;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "CpM") {
                        valor_n = data.actor.data.grupos.CpM;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "EP") {
                        valor_n = data.actor.data.grupos.EP;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "PP") {
                        valor_n = data.actor.data.grupos.PP;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "PpA") {
                        valor_n = data.actor.data.grupos.PpA;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    }
                    else if (item.data.tipo == "PpB") {
                        valor_n = data.actor.data.grupos.PpB;
                        isso.updateItemNivel(valor_n, item._id, isso.actor);
                    } 
                });
            }
            if (data.actor.h_prof.length > 0){
                data.actor.h_prof.forEach(function(item){
                    isso.updateHabAjuste(item._id, isso.actor);
                });
            }
            if (data.actor.h_man.length > 0){
                data.actor.h_man.forEach(function(item){
                    isso.updateHabAjuste(item._id, isso.actor);
                });
            }
            if (data.actor.h_con.length > 0){
                data.actor.h_con.forEach(function(item){
                    isso.updateHabAjuste(item._id, isso.actor);
                });
            }
            if (data.actor.h_sub.length > 0){
                data.actor.h_sub.forEach(function(item){
                    isso.updateHabAjuste(item._id, isso.actor);
                });
            }
            if (data.actor.h_inf.length > 0){
                data.actor.h_inf.forEach(function(item){
                    isso.updateHabAjuste(item._id, isso.actor);
                });
            }
            if (data.actor.h_geral.length > 0){
                data.actor.h_geral.forEach(function(item){
                    isso.updateHabAjuste(item._id, isso.actor);
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
            var def_atiVal = def_pasVal + this.actor.data.data.atributos.AGI;
            this.actor.update({
                "data.d_passiva.valor": def_pasVal,
                "data.d_passiva.categoria": def_pasCat,
                "data.d_ativa.categoria": def_pasCat,
                "data.d_ativa.valor": def_atiVal,
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
            if (data.actor.data.carga.value > 20 && data.actor.data.carga.value > data.actor.data.atributos.FOR * 20) {
                this.actor.update({
                    "data.carga.sobrecarga": true,
                    "data.carga.valor_s": data.actor.data.carga.value - data.actor.data.atributos.FOR * 20
                });
            } else {
                this.actor.update({
                    "data.carga.sobrecarga": false,
                    "data.carga.valor_s": 0
                });
            }
            if (this.actor.data.data.raca != "" && this.actor.data.data.profissao != "") {
                let ef_base = 0;
                let vb_base = 0;
                let eh_base = 0;
                if (this.actor.data.data.raca == "Anão") {
                    ef_base = 15;
                    vb_base = 16;
                } else if (this.actor.data.data.raca == "Elfo Dourado") {
                    ef_base = 13;
                    vb_base = 18;
                } else if (this.actor.data.data.raca == "Elfo Florestal") {
                    ef_base = 14;
                    vb_base = 18
                } else if (this.actor.data.data.raca == "Humano") {
                    ef_base = 17;
                    vb_base = 20;
                } else if (this.actor.data.data.raca == "Meio-Elfo") {
                    ef_base = 15;
                    vb_base = 17;
                } else if (this.actor.data.data.raca == "Pequenino") {
                    ef_base = 11;
                    vb_base = 14;
                }
                if (this.actor.data.data.profissao == "Bardo") eh_base = 9;
                else if (this.actor.data.data.profissao == "Guerreiro") eh_base = 18;
                else if (this.actor.data.data.profissao == "Ladino" || this.actor.data.data.profissao == "Sacerdote") eh_base = 12;
                else if (this.actor.data.data.profissao == "Mago") eh_base = 6;
                else if (this.actor.data.data.profissao == "Rastreador") eh_base = 15;
                let efMax = this.actor.data.data.atributos.FOR + this.actor.data.data.atributos.FIS + ef_base;
                let vbTotal = this.actor.data.data.atributos.FIS + vb_base;
                if (this.actor.data.data.ef.max != efMax) {
                    this.actor.update({
                        "data.ef.max": efMax,
                        "data.vb": vbTotal
                    });
                }
                if (this.actor.data.data.estagio == 1){
                    let ehMax = eh_base + this.actor.data.data.atributos.FIS;
                    if (this.actor.data.data.eh.max != ehMax) {
                        this.actor.update({
                            "data.eh.max": ehMax
                        });
                    }
                }
                
            }

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
        html.find(".ipAtrAUR").change(this._attKarmaMax(this));
        html.find(".ipEstagio").change(this._attKarmaMax(this));
        html.find(".ipEstagio").change(this._attRF(this));
        html.find(".ipAtrFIS").change(this._attRF(this));
        html.find(".ipEstagio").change(this._attRM(this));
        html.find(".ipAtrAUR").change(this._attRM(this));
        html.find(".ipEstagio").change(this._attProxEstag(this));
        html.find(".carac_sortINT").change(ev => {
            let soma = parseInt($(html.find(".carac_sortINT")).val()) + parseInt($(html.find(".mod_racialINT")).val());
            $(html.find(".car_finINT")).val(soma);
        });
        html.find(".mod_racialINT").change(ev => {
            let soma = parseInt($(html.find(".carac_sortINT")).val()) + parseInt($(html.find(".mod_racialINT")).val());
            $(html.find(".car_finINT")).val(soma);
        });
        html.find(".carac_sortAUR").change(ev => {
            let soma = parseInt($(html.find(".carac_sortAUR")).val()) + parseInt($(html.find(".mod_racialAUR")).val());
            $(html.find(".car_finAUR")).val(soma);
        });
        html.find(".mod_racialAUR").change(ev => {
            let soma = parseInt($(html.find(".carac_sortAUR")).val()) + parseInt($(html.find(".mod_racialAUR")).val());
            $(html.find(".car_finAUR")).val(soma);
        });
        html.find(".carac_sortCAR").change(ev => {
            let soma = parseInt($(html.find(".carac_sortCAR")).val()) + parseInt($(html.find(".mod_racialCAR")).val());
            $(html.find(".car_finCAR")).val(soma);
        });
        html.find(".mod_racialCAR").change(ev => {
            let soma = parseInt($(html.find(".carac_sortCAR")).val()) + parseInt($(html.find(".mod_racialCAR")).val());
            $(html.find(".car_finCAR")).val(soma);
        });
        html.find(".carac_sortFOR").change(ev => {
            let soma = parseInt($(html.find(".carac_sortFOR")).val()) + parseInt($(html.find(".mod_racialFOR")).val());
            $(html.find(".car_finFOR")).val(soma);
        });
        html.find(".mod_racialFOR").change(ev => {
            let soma = parseInt($(html.find(".carac_sortFOR")).val()) + parseInt($(html.find(".mod_racialFOR")).val());
            $(html.find(".car_finFOR")).val(soma);
        });
        html.find(".carac_sortFIS").change(ev => {
            let soma = parseInt($(html.find(".carac_sortFIS")).val()) + parseInt($(html.find(".mod_racialFIS")).val());
            $(html.find(".car_finFIS")).val(soma);
        });
        html.find(".mod_racialFIS").change(ev => {
            let soma = parseInt($(html.find(".carac_sortFIS")).val()) + parseInt($(html.find(".mod_racialFIS")).val());
            $(html.find(".car_finFIS")).val(soma);
        });
        html.find(".carac_sortAGI").change(ev => {
            let soma = parseInt($(html.find(".carac_sortAGI")).val()) + parseInt($(html.find(".mod_racialAGI")).val());
            $(html.find(".car_finAGI")).val(soma);
        });
        html.find(".mod_racialAGI").change(ev => {
            let soma = parseInt($(html.find(".carac_sortAGI")).val()) + parseInt($(html.find(".mod_racialAGI")).val());
            $(html.find(".car_finAGI")).val(soma);
        });
        html.find(".carac_sortPER").change(ev => {
            let soma = parseInt($(html.find(".carac_sortPER")).val()) + parseInt($(html.find(".mod_racialPER")).val());
            $(html.find(".car_finPER")).val(soma);
        });
        html.find(".mod_racialPER").change(ev => {
            let soma = parseInt($(html.find(".carac_sortPER")).val()) + parseInt($(html.find(".mod_racialPER")).val());
            $(html.find(".car_finPER")).val(soma);
        });
        html.find(".calculaNovaEH").click(this._passandoEH.bind(this));
    }

    _passandoEH(event) {
        let estagio_atual = parseInt($(".ipEstagio").val());
        let valord10 = parseInt($(".valord10EH").val())
        let profissao = $(".profissao").val();
        let raca_list = [];
        let nova_eh = 0;
        let eh_atual = this.actor.data.data.eh.max;
        let attFIS = this.actor.data.data.atributos.FIS;
        if (estagio_atual > 1 && valord10 > 0 && valord10 <= 10) {
            if (profissao == "Guerreiro") {
                raca_list = [0,6,6,7,7,7,8,8,8,9,9];
                nova_eh = raca_list[valord10];
                this.actor.update({
                    "data.eh.max": eh_atual + nova_eh + attFIS
                });
            } else if (profissao == "Ladino" || profissao == "Sacerdote") {
                raca_list = [0,4,4,5,5,5,6,6,6,7,7];
                nova_eh = raca_list[valord10];
                this.actor.update({
                    "data.eh.max": eh_atual + nova_eh + attFIS
                });
            } else if (profissao == "Mago") {
                raca_list = [0,2,2,3,3,3,4,4,4,5,5];
                nova_eh = raca_list[valord10];
                this.actor.update({
                    "data.eh.max": eh_atual + nova_eh + attFIS
                });
            } else if (profissao == "Rastreador") {
                raca_list = [0,5,5,6,6,6,7,7,7,8,8];
                nova_eh = raca_list[valord10];
                this.actor.update({
                    "data.eh.max": eh_atual + nova_eh + attFIS
                });
            } else if (profissao == "Bardo") {
                raca_list = [0,3,3,4,4,4,5,5,5,6,6];
                nova_eh = raca_list[valord10];
                this.actor.update({
                    "data.eh.max": eh_atual + nova_eh + attFIS
                });
            }
        }
        $(".valord10EH").val("");
        this.render();
    }

    _attProxEstag(event) {
        let estagio_atual = parseInt($(".ipEstagio").val());
        let prox_est = [0, 11, 21, 31, 46, 61, 76, 96, 116, 136, 166, 196, 226 , 266, 306, 346, 386, 436, 486, 536, 586, 646, 706, 766, 826, 896, 966, 1036, 1106, 1186, 1266, 
        1346, 1426, 1516, 1606, 1696, 1786, 1886, 1986, 2086];
        if (estagio_atual < 40) {
            this.actor.update({
                "data.pontos_estagio.next": prox_est[estagio_atual]
            });
        }
    }

    _attRM(event) {
        let rm = parseInt($(".ipEstagio").val()) + this.actor.data.data.atributos.AUR;
        this.actor.update({
            "data.rm": rm
        });
    }

    _attRF(event) {
        let rf = parseInt($(".ipEstagio").val()) + this.actor.data.data.atributos.FIS;
        this.actor.update({
            "data.rf": rf
        });
    }

    _attKarmaMax(event) {
        let karma = (parseInt($(".ipAtrAUR").val()) + 1 ) * (parseInt($(".ipEstagio").val()) + 1);
        if (karma < 0) karma = 0;
        this.actor.update({
            "data.karma.max": karma
        });
    }

    _preparaCaracRaciais(sheetData) {
        const actorData = sheetData.actor;
        if (actorData.data.raca == "Humano") {
            this.actor.update({
                "data.mod_racial.INT": 0,
                "data.mod_racial.AUR": 0,
                "data.mod_racial.CAR": 0,
                "data.mod_racial.FOR": 0,
                "data.mod_racial.FIS": 0,
                "data.mod_racial.AGI": 0,
                "data.mod_racial.PER": 0
            });
        } else if (actorData.data.raca == "Pequenino") {
            this.actor.update({
                "data.mod_racial.INT": 0,
                "data.mod_racial.AUR": 0,
                "data.mod_racial.CAR": 1,
                "data.mod_racial.FOR": -2,
                "data.mod_racial.FIS": 1,
                "data.mod_racial.AGI": 2,
                "data.mod_racial.PER": 1
            });
        } else if (actorData.data.raca == "Anão") {
            this.actor.update({
                "data.mod_racial.INT": 0,
                "data.mod_racial.AUR": 0,
                "data.mod_racial.CAR": 0,
                "data.mod_racial.FOR": 1,
                "data.mod_racial.FIS": 2,
                "data.mod_racial.AGI": -1,
                "data.mod_racial.PER": 0
            });
        } else if (actorData.data.raca == "Elfo Dourado") {
            this.actor.update({
                "data.mod_racial.INT": 1,
                "data.mod_racial.AUR": 2,
                "data.mod_racial.CAR": 0,
                "data.mod_racial.FOR": -1,
                "data.mod_racial.FIS": -1,
                "data.mod_racial.AGI": 1,
                "data.mod_racial.PER": 0
            });
        } else if (actorData.data.raca == "Elfo Florestal") {
            this.actor.update({
                "data.mod_racial.INT": 0,
                "data.mod_racial.AUR": 1,
                "data.mod_racial.CAR": 0,
                "data.mod_racial.FOR": -1,
                "data.mod_racial.FIS": -1,
                "data.mod_racial.AGI": 1,
                "data.mod_racial.PER": 2
            });
        } else if (actorData.data.raca == "Meio-Elfo") {
            this.actor.update({
                "data.mod_racial.INT": 0,
                "data.mod_racial.AUR": 0,
                "data.mod_racial.CAR": 1,
                "data.mod_racial.FOR": 0,
                "data.mod_racial.FIS": 0,
                "data.mod_racial.AGI": 1,
                "data.mod_racial.PER": 0
            });
        }
    }

    _calculaAjuste(sheetData) {
        const actorData = sheetData.actor;
        let carac_finalINT = actorData.data.carac_final.INT;
        let carac_finalAUR = actorData.data.carac_final.AUR;
        let carac_finalCAR = actorData.data.carac_final.CAR;
        let carac_finalFOR = actorData.data.carac_final.FOR;
        let carac_finalFIS = actorData.data.carac_final.FIS;
        let carac_finalAGI = actorData.data.carac_final.AGI;
        let carac_finalPER = actorData.data.carac_final.PER;
        let valores = [0,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,1,1,1,2,2,3,3,4,5,6,7,8,9,10];
        if (carac_finalINT > 0) {
            this.actor.update({
                "data.atributos.INT": valores[carac_finalINT]
            });
        }
        if (carac_finalAUR > 0) {
            this.actor.update({
                "data.atributos.AUR": valores[carac_finalAUR]
            });
        }
        if (carac_finalCAR > 0) {
            this.actor.update({
                "data.atributos.CAR": valores[carac_finalCAR]
            });
        }  
        if (carac_finalFOR > 0) {
            this.actor.update({
                "data.atributos.FOR": valores[carac_finalFOR]
            });
        }  
        if (carac_finalFIS > 0) {
            this.actor.update({
                "data.atributos.FIS": valores[carac_finalFIS]
            });
        } 
        if (carac_finalAGI > 0) {
            this.actor.update({
                "data.atributos.AGI": valores[carac_finalAGI]
            });
        } 
        if (carac_finalPER > 0) {
            this.actor.update({
                "data.atributos.PER": valores[carac_finalPER]
            });
        } 
    }

    _prepareValorTeste(sheetData){
        const actorData = sheetData.actor;
        this.actor.update({
            "data.valor_teste.INT": actorData.data.atributos.INT*4,
            "data.valor_teste.AUR": actorData.data.atributos.AUR*4,
            "data.valor_teste.CAR": actorData.data.atributos.CAR*4,
            "data.valor_teste.FOR": actorData.data.atributos.FOR*4,
            "data.valor_teste.FIS": actorData.data.atributos.FIS*4,
            "data.valor_teste.AGI": actorData.data.atributos.AGI*4,
            "data.valor_teste.PER": actorData.data.atributos.PER*4
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
    }

    updateHabAjuste(item_id, actor = null){
        actor = !actor ? this.actor : actor;
        if (!actor.data) {
            return;
        }
        const item_hab = actor.getOwnedItem(item_id);
        console.log(item_hab);
        const atributo = item_hab.data.data.ajuste.atributo;
        let valor_atrib = 0;
        const actorData = actor.data.data;
        if (atributo == "INT") valor_atrib = actorData.atributos.INT;
        else if (atributo == "AUR") valor_atrib = actorData.atributos.AUR;
        else if (atributo == "CAR") valor_atrib = actorData.atributos.CAR;
        else if (atributo == "FOR") valor_atrib = actorData.atributos.FOR;
        else if (atributo == "FIS") valor_atrib = actorData.atributos.FIS;
        else if (atributo == "AGI") valor_atrib = actorData.atributos.AGI;
        else if (atributo == "PER") valor_atrib = actorData.atributos.PER;
        if (item_hab.data.data.ajuste.valor != valor_atrib) {
            item_hab.update({
                "data.ajuste.valor": valor_atrib
            });
        }
    }
    
    updateItemNivel(valor_n , item_id, actor = null) {
        actor = !actor ? this.actor : actor;
        if (!actor.data) {
            return;
        }
        const item_comb = actor.getOwnedItem(item_id);
        item_comb.update({
            "data.nivel": valor_n
        });
    }
}