
function domain() {
    let a = ["nuestro","mi","tu"]
    let b = ['piso','apartamento','chalet']
    let c = [".com",".es",'.net']

    for(i=0;i<a.length;i++){
        for(j=0;j<b.length;j++){
            for(k=0;k<c.length;k++){
                console.log(a[i]+b[j]+c[k]);
            }            
        }       
    }
}
domain();
