export default class tagmarItemSheet extends ItemSheet {
    constructor(...args) {
        super(...args);
        // Expand the default size of the class sheet
        if ( this.item.data.type === "Combate" ) {
          this.options.width = this.position.width =  640;
          this.options.height = this.position.height = 620;
        }
        if ( this.item.data.type === "Raca" ) {
            this.options.width = this.position.width =  640;
            this.options.height = this.position.height = 450;
          }
      }
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
        classes: ["tagmar", "sheet", "item"],
        //width: 900,
        //height: 600,
        tabs: [{
            navSelector: ".prim-tabs",
            contentSelector: ".sheet-primary",
            initial: "descricao"
            }]
        });
    }

    get template() {
        return 'systems/tagmar/templates/sheets/'+ this.item.data.type.toLowerCase() +'-sheet.hbs';
    }

    getData() {
        const data = super.getData();
        
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
        if (!this.options.editable) return;

        html.find(".nivelInput").change(event => {
            const nivel = parseInt(html.find(".nivelInput").val());
            const custo = parseInt(html.find(".custoInput").val());
            $(html.find(".totalInput")).val(nivel + custo);
        });
        html.find(".custoInput").change(event => {
            const nivel = parseInt(html.find(".nivelInput").val());
            const custo = parseInt(html.find(".custoInput").val());
            $(html.find(".totalInput")).val(nivel + custo);
        });

        html.find(".dano25").change(event => {
            const dano25Input = html.find(".dano25");
            var dano25 = parseInt($(dano25Input).val());
            var dano50 = dano25 + dano25;
            var dano75 = dano50 + dano25;
            var dano100 = dano75 + dano25;
            var dano125 = dano100 + dano25;
            var dano150 = dano125 + dano25;
            var dano175 = dano150 + dano25;
            var dano200 = dano175 + dano25;
            var dano225 = dano200 + dano25;
            var dano250 = dano225 + dano25;
            var dano275 = dano250 + dano25;
            var dano300 = dano275 + dano25;
            $(html.find(".dano50")).val(dano50);
            $(html.find(".dano75")).val(dano75);
            $(html.find(".dano100")).val(dano100);
            $(html.find(".dano125")).val(dano125);
            $(html.find(".dano150")).val(dano150);
            $(html.find(".dano175")).val(dano175);
            $(html.find(".dano200")).val(dano200);
            $(html.find(".dano225")).val(dano225);
            $(html.find(".dano250")).val(dano250);
            $(html.find(".dano275")).val(dano275);
            $(html.find(".dano300")).val(dano300);
        });

        html.find(".ajuste").change(this._attTotalHab(this));
        html.find(".nivel").change(this._attTotalHab(this));
        html.find(".penal").change(this._attTotalHab(this));
        html.find(".bonus").change(this._attTotalHab(this));

    }

    

    _attTotalHab(event) {
        const ajuste = $(".ajuste").val();
        const nivel = $(".nivel").val();
        const penal = $(".penal").val();
        const bonus = $(".bonus").val();
        let soma = parseInt(ajuste) + parseInt(nivel) + parseInt(penal) + parseInt(bonus);
        $(".totalInput2").val(soma);
    }

}