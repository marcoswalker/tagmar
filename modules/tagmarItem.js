export class tagmarItem extends Item {

    prepareData() {
        super.prepareData();
    
        // Get the Item's data
        const itemData = this.data;
        const actorData = this.actor ? this.actor.data : {};
        const data = itemData.data;
        const tabela_resol = [
            [-7, "verde", "verde", "verde", "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "laranja", "vermelho", "azul", "cinza"],
            [-6, "verde", "verde", "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "laranja", "vermelho", "azul", "cinza"],
            [-5, "verde", "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "azul", "cinza"],
            [-4, "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "azul", "cinza"],
            [-3, "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "azul", "cinza"],
            [-2, "verde", "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "vermelho", "azul", "cinza"],
            [-1, "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "azul", "cinza"],
            [0, "verde", "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "cinza"],
            [1, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "cinza"],
            [2, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "azul", "azul", "cinza"],
            [3, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "cinza"],
            [4, "verde", "branco", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "cinza"],
            [5, "verde", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "cinza"],
            [6, "verde", "branco", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
            [7, "verde", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
            [8, "verde", "branco", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
            [9, "verde", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "cinza"],
            [10, "verde", "branco", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "cinza"],
            [11, "verde", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "cinza"],
            [12, "verde", "branco", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "cinza"],
            [13, "verde", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "cinza"],
            [14, "verde", "branco", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "roxo", "cinza"],
            [15, "verde", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
            [16, "verde", "amarelo", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
            [17, "verde", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
            [18, "verde", "amarelo", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "roxo", "roxo", "cinza"],
            [19, "verde", "amarelo", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "roxo", "roxo", "roxo", "cinza"],
            [20, "verde", "amarelo", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "laranja", "vermelho", "vermelho", "vermelho", "azul", "azul", "azul", "azul", "roxo", "roxo", "roxo", "cinza"]
        ];
        this.tabela_resol = tabela_resol;
    }
    async roll(ac, extra = {}) {
        // Basic template rendering data
        const token = this.actor.token;
        const item = this.data;
        const actorData = this.actor ? this.actor.data.data : {};
        const itemData = item.data;
        let formulaD = "";
        var conteudo = "";
        var resultado = "";
        var PrintResult = "";
        var r;
        const tabela_resol = this.tabela_resol;
        if (item.type == "Combate") {
            let municao = itemData.municao;
            let muni_usada = 0;
            if (municao > 0) {
                muni_usada = 1;
                municao -= 1;
                item.update({
                    "data.municao": municao
                });
                item.render();
            }
            let bonus_cat = itemData.bonus;
            let bonus_ajustev = 0;
            if (bonus_cat == "AUR") bonus_ajustev = actorData.atributos.AUR;
            else if (bonus_cat == "FOR") bonus_ajustev = actorData.atributos.FOR;
            else if (bonus_cat == "AGI") bonus_ajustev = actorData.atributos.AGI;
            else if (bonus_cat == "PER") bonus_ajustev = actorData.atributos.PER;
            let total_l = itemData.nivel + bonus_ajustev + itemData.bonus_magico + itemData.def_l;
            let total_m = itemData.nivel + bonus_ajustev + itemData.bonus_magico + itemData.def_m;
            let total_p = itemData.nivel + bonus_ajustev + itemData.bonus_magico + itemData.def_p;
            let dano_total = 0;
            let dano_text = "";
            const cat_def = actorData.inf_ataque.cat_def;
            let valor_tabela = 0;
            if (cat_def == "L") valor_tabela = total_l + actorData.inf_ataque.bonus - actorData.inf_ataque.valor_def;
            else if (cat_def == "M") valor_tabela = total_m + actorData.inf_ataque.bonus - actorData.inf_ataque.valor_def;
            else if (cat_def == "P") valor_tabela = total_p + actorData.inf_ataque.bonus - actorData.inf_ataque.valor_def;
            formulaD = "1d20";
            conteudo = "";
            r = new Roll(formulaD);
            r.evaluate();
            var Dresult = r.total;
            if (valor_tabela <= 20) {
                for (let i = 0; i < tabela_resol.length; i++) {
                    if (tabela_resol[i][0] == valor_tabela) {
                        resultado = tabela_resol[i][Dresult];
                        if (resultado == "verde") PrintResult = "<h1 class='mediaeval rola' style='color: green; text-align:center;'>Verde - Falha Crítica</h1>";
                        else if (resultado == "branco") PrintResult = "<h1 class='mediaeval rola' style='color: white; text-align:center;'>Branco - Errou</h1>";
                        else if (resultado == "amarelo") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: yellow; text-align:center;'>Amarelo - 25%</h1>";
                            dano_total = itemData.dano.d25;
                        }
                        else if (resultado == "laranja") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: orange; text-align:center;'>Laranja - 50%</h1>";
                            dano_total = itemData.dano.d50;
                        }
                        else if (resultado == "vermelho") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: red; text-align:center;'>Vermelho - 75%</h1>";
                            dano_total = itemData.dano.d75;
                        }
                        else if (resultado == "azul") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: blue; text-align:center;'>Azul - 100%</h1>";
                            dano_total = itemData.dano.d100;
                        }
                        else if (resultado == "roxo") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: rgb(2,9,37); text-align:center;'>Azul Escuro - 125%</h1>";
                            dano_total = itemData.dano.d125;
                        }
                        else if (resultado == "cinza") PrintResult = "<h1 class='mediaeval rola' style='color: gray; text-align:center;'>Cinza - Crítico</h1>";
                        let coluna = "<h4 class='mediaeval rola'>Coluna: " + tabela_resol[i][0] + "</h4><h4 class='mediaeval rola'>Munição gasta: " + muni_usada + "</h4>";
                        dano_text = "<h2 class='mediaeval rola' style='text-align: center;'>Dano: " + dano_total + "</h2>";
                            r.toMessage({
                            user: game.user._id,
                            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                            flavor: `<h2 class="mediaeval">${item.name} - ${itemData.tipo}</h2>${conteudo}${coluna}${PrintResult}${dano_text}`
                        });
                    }
                }
            } else {
                let coluna_t = valor_tabela % 20;
                let ajusteDano = parseInt(valor_tabela/20) * 50;
                for (let i = 0; i < tabela_resol.length; i++) {
                    if (tabela_resol[i][0] == coluna_t) {
                        resultado = tabela_resol[i][Dresult];
                        if (resultado == "verde") PrintResult = "<h1 class='mediaeval rola' style='color: green; text-align:center;'>Verde - Falha Crítica</h1>";
                        else if (resultado == "branco") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: white; text-align:center;'>Branco - Errou</h1>";
                            dano_total = 0 + ajusteDano;
                        }
                        else if (resultado == "amarelo") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: yellow; text-align:center;'>Amarelo - 25%</h1>";
                            dano_total = 25 + ajusteDano;
                        }
                        else if (resultado == "laranja") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: orange; text-align:center;'>Laranja - 50%</h1>";
                            dano_total = 50 + ajusteDano;
                        }
                        else if (resultado == "vermelho") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: red; text-align:center;'>Vermelho - 75%</h1>";
                            dano_total = 75 + ajusteDano;
                        }
                        else if (resultado == "azul") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: blue; text-align:center;'>Azul - 100%</h1>";
                            dano_total = 100 + ajusteDano;
                        }
                        else if (resultado == "roxo") {
                            PrintResult = "<h1 class='mediaeval rola' style='color: rgb(2,9,37); text-align:center;'>Azul Escuro - 125%</h1>";
                            dano_total = 125 + ajusteDano;
                        }
                        else if (resultado == "cinza") PrintResult = "<h1 class='mediaeval rola' style='color: gray; text-align:center;'>Cinza - Crítico</h1>";
                        let dano_novo = 0;
                        switch (dano_total) {
                            case 25:
                                dano_novo = itemData.dano.d25;
                                break;
                            case 50:
                                dano_novo = itemData.dano.d50;
                                break;
                            case 75:
                                dano_novo = itemData.dano.d75;
                                break;
                            case 100:
                                dano_novo = itemData.dano.d100;
                                break;
                            case 125:
                                dano_novo = itemData.dano.d125;
                                break;
                            case 150:
                                dano_novo = itemData.dano.d150;
                                break;
                            case 175:
                                dano_novo = itemData.dano.d175;
                                break;
                            case 200:
                                dano_novo = itemData.dano.d200;
                                break;
                            case 225:
                                dano_novo = itemData.dano.d225;
                                break;
                            case 250:
                                dano_novo = itemData.dano.d250;
                                break;
                            case 275:
                                dano_novo = itemData.dano.d275;
                                break;
                            case 300:
                                dano_novo = itemData.dano.d300;
                                break;
                        }
                        let coluna = "<h4 class='mediaeval rola'>Coluna: " + tabela_resol[i][0] + "</h4><h4 class='mediaeval rola'>Munição gasta: " + muni_usada + "</h4>";
                        let ajuste_text = "<h1 class='mediaeval rola' style='text-align: center;'>AAC20: " + ajusteDano + "%</h1>";
                        dano_text = "<h1 class='mediaeval rola' style='text-align: center;'>Dano: " + dano_novo + "</h1>";
                        r.toMessage({
                        user: game.user._id,
                        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                        flavor: `<h2 class="mediaeval">${item.name} - ${itemData.tipo}</h2>${conteudo}${coluna}${PrintResult}${ajuste_text}${dano_text}`
                        });
                    }
                }
            }
        }
    }
}