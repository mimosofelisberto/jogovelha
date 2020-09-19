var Jogo = {
    minhaVez : 0,
    pecas : ["x","o"],
    casas : ["","","","","","","","",""],
    golo : [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ],
    conteudo : null,


    init : function(document){
        console.log("Inicializando o jogo")
        this.conteudo = document.getElementById("conteudo")
        console.log(this.conteudo)
        
        this.preencherCasas();
        
    },

    verificarGolo : function(idPeca){
        
        for(var i=0; i<this.golo.length;i++){
            var mesmaPeca = 0
            for(var j=0; j<3;j++){
                var casa = this.golo[i][j]
                if(this.casas[casa] == idPeca){
                    mesmaPeca ++;
                }
            }
            if(mesmaPeca == 3){
                return true
            }
        }
        return false
    },

    preencherCasas : function(){
        var casaText = ""
        for(var i=0; i<this.casas.length; i++){
            casaText += ("<div  id=" + i +" class='peca' onclick='Jogo.joguei(" + i +")' >"+ this.casas[i] +"</div>")
        }
        this.conteudo.innerHTML = casaText
    },
    casaLivre : function (idCase) {
        return this.casas[idCase] == "" ? true : false
    },

    joguei : function(idCasa){
        if(this.casaLivre(idCasa)){
            const pecaActual = this.pecas[this.minhaVez]
            this.casas[idCasa] = pecaActual
            this.minhaVez = this.minhaVez == 0 ? 1 : 0
            this.preencherCasas()
            if(this.verificarGolo(pecaActual)){
                alert("É golo!!!")
            }
        }else{
            alert("Casa já esta ocupada!")
        }
    },
    novoJogo : function () {
        this.casas = ["","","","","","","","",""]
        this.minhaVez = 0
        this.preencherCasas();
    }
}
