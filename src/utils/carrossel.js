const chevleft = document.querySelector('.bxs-left-arrow')
const chevright = document.querySelector(".bxs-right-arrow")
const currentimage = document.getElementById("currentimage")
/* const itens = require('./carrcontent.json') */
let counter = 0

const itens = [{
    "idItem":1,
    "url":"https://www.arweave.net/CjuT_NysA-SR5KFYX6wGE6LQDxrG_oZ0W9QSUlb8LRM?ext=png",
    
},
{
    "idItem":2,
    "url":"https://img.freepik.com/vetores-gratis/infograficos-de-token-nao-fungiveis-nft-com-tokens-e-moedas-exclusivos-de-ouro-voador-em-fundo-escuro-pague-por-colecionaveis-exclusivos-em-jogos-ou-arte-banner-ou-cabecalho-para-ilustracao-vetorial-de-site_337410-1441.jpg?w=2000",
}, {
    "idItem":3,
    "url":"https://www.arweave.net/H2mBNPdKNsHGH6WZNf7aUY_lh8KLJBxLvOwp3rfyDP0?ext=png",
},
{
    "idItem":4,
    "url":"https://c.gitcoin.co/grants/64fefc43818579058071695cc704289c/r.NFT_Banner.jpg",
    
}
]

function Chevleft(){
    counter-=1
    if(counter<0){
        counter=itens.length-1
    }
    currentimage.setAttribute("src",itens[counter].url.toString())
}
chevleft.addEventListener("click",Chevleft)
function Chevright(){
    if(counter>=itens.length-1){
        counter=0
    }else{
        counter+=1
    }
    currentimage.setAttribute("src",itens[counter].url.toString())
    carrtext.innerHTML= itens[counter].texto.toString()
}
chevright.addEventListener("click",Chevright)

setInterval(Chevright, 3000)