var list = ['Afonso', 'Felipe', 'Rafaela', 420];//array or list

console.log(list.indexOf('Afonso'));//position of element
console.log(list.indexOf('Rafaela'));//position of element

console.log(list);
list[0]='Afonso Silva';
console.log(list);

list.push("Test add");//add element
console.log(list);

list.shift();//remove first element
console.log(list);

list.pop();//remove final element
console.log(list);

console.log(list.join(';'));//element listing with ''
console.log(list.join(','));//element listing with ''
