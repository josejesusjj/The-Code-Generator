function GenerateDomain(){
  let pronoun = ['the','our'];
  let adj = ['grat','big'];
  let noun = ['jogger','racoon'];
  let domain = ['com','es','eu','net'];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domainIndex = Math.floor(Math.random() * domain.length);
  
  return (
    pronoun[pronounIndex] +
  
    adj[adjIndex] +
   
    noun[nounIndex] +
    "." +
    domain[domainIndex])}

console.log(GenerateDomain())