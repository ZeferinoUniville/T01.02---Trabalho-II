let prosOrig = [
  { nome: 'P1', prioridade: 2, ucp: [2,-1,1,1] },
  { nome: 'P2', prioridade: 1, ucp: [1,-1,1,2] },
  { nome: 'P3', prioridade: 3, ucp: [1,-1,-1,1] },
]

let prosFim = [
  { nome: 'P1', ucp: [2,-1,1,1] },
  { nome: 'P3', ucp: [1,-1,-1,1] },
  { nome: 'P2', ucp: [1,-1,1,2] },
]


for(let i = 0; i < prosFim.length; i++){
  for(let j = 0; j < prosFim[i].ucp.length; j++){
    if(prosFim[i].ucp[j]>0){
      //printa
      console.log("Executando "+prosFim[i].nome+" que consumiu "+prosFim[i].ucp[j]+" unidades de tempo")
      prosFim[i].ucp[j] = 0

    }else if(prosFim[i].ucp[j]==0){
      //passa

    }else{
      //é negativo
      if(i+1==prosFim.length){
        for(let x = 0; x < prosFim[2].ucp.length; x++){
          if(prosFim[2].ucp[x]>0){
            //printa
            console.log("Executando "+prosFim[2].nome+" que consumiu "+prosFim[2].ucp[x]+" unidades de tempo")
            prosFim[2].ucp[x] = 0
            break

          }else if(prosFim[2].ucp[x]==0){
            //passa

          }
        }
      }else{
        for(let y = 0; y < prosFim[i+1].ucp.length; y++){
          if(prosFim[i+1].ucp[y]>0){
            //printa
            console.log("Executando "+prosFim[i+1].nome+" que consumiu "+prosFim[i+1].ucp[y]+" unidades de tempo")
            prosFim[i+1].ucp[y] = 0
            break

          }else if(prosFim[i+1].ucp[y]==0){
            //passa

          }
        }
      }
    }
  }
}