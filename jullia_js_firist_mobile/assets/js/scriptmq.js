// esse codigo serve para monitorar o tamanho da tela, e quando chegar em determinado ponto ira exibir o menu burguer


function mudouTamanho() {
     if (window.innerwidth >= 768) {
          //itens.style.display = 'incline-block'
          Itens.style.display = 'block'
     } else {

     itens.style.display = 'none' 
    
    }
}
    //exibir o menu burger em tela menor
        /*
        Ao clicar no menu, bloqueado (block) caso esteja deve ser exibido (none) e vice versa
        mas deixando assim oculto o menu com o "id=burger"
        */
        function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }
   

