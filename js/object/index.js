const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}
console.log(hasPerson('hasOwnProperty'))