
function domain() {
    let a = ["nuestro","mi","tu"]
    let b = ['piso','apartamento','chalet']
    let c = [".com",".es",'.net']

    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            for(let k=0;k<c.length;k++){
                console.log(a[i]+b[j]+c[k]);
            }            
        }       
    }
}
domain();
