export default function(data){
    // recibe un objetos y limpia los keys que vienen con value vacío/undefined
    let newData = Object.entries(data).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
    // convierte los objetos en una url
    newData = new URLSearchParams(newData).toString()
    
    // console.log('data pre request', newData.search(/%2C/) != -1 ? 'no lo encontro' : 'lo encontro')
    const fixNewData = newData.replace(/%2C/gi,',');
    return newData.search(/%2C/) !== -1 ? fixNewData  : newData ;
}