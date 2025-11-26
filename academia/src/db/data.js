// dados simples em memória
export const db = {
alunos: [ { id: 1, nome: 'Ana Silva', email: 'ana@example.com', planoId: 1 } ],
planos: [ { id:1, nome:'Mensal', preco:120 }, { id:2, nome:'Trimestral', preco:300 } ],
matriculas: [ { id:1, alunoId:1, inicio:'2025-10-01' } ],
treinos: [ { id:1, alunoId:1, dia:'Segunda', exercicios:['Agachamento','Supino'] }]
};


// helper simples para simular fetchs
export function load(resource) {
return new Promise(resolve => setTimeout(()=> resolve(JSON.parse(JSON.stringify(db[resource]||[]))), 150));
}


export function save(resource, obj){
const arr = db[resource];
const id = arr.length ? Math.max(...arr.map(x=>x.id))+1 : 1;
const novo = { id, ...obj };
arr.push(novo);
return Promise.resolve(novo);
}