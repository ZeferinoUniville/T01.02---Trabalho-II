let processos = [
  { nome: 'P1', ucp: [2,-1,1,1] },
  { nome: 'P2', ucp: [1,-1,1,2] },
  { nome: 'P3', ucp: [1,-1,-1,1] },
]

console.log(processos)
for(let i = 0; i < processos.length; i++){
  for(let j = 0; j < processos[i].ucp.length; j++){
    if(processos[i].ucp[j]>0){
      //printa
      console.log("Executando "+processos[i].nome+" que consumiu "+processos[i].ucp[j]+" unidades de tempo")
      processos[i].ucp[j] = 0

    }else if(processos[i].ucp[j]==0){
      //passa

    }else{
      //é negativo
      if(i+1==processos.length){
        for(let x = 0; x < processos[2].ucp.length; x++){
          if(processos[2].ucp[x]>0){
            //printa
            console.log("Executando "+processos[2].nome+" que consumiu "+processos[2].ucp[x]+" unidades de tempo")
            processos[2].ucp[x] = 0
            break

          }else if(processos[2].ucp[x]==0){
            //passa

          }
        }
      }else{
        for(let y = 0; y < processos[i+1].ucp.length; y++){
          if(processos[i+1].ucp[y]>0){
            //printa
            console.log("Executando "+processos[i+1].nome+" que consumiu "+processos[i+1].ucp[y]+" unidades de tempo")
            processos[i+1].ucp[y] = 0
            break

          }else if(processos[i+1].ucp[y]==0){
            //passa

          }
        }
      }
    }
  }
}
