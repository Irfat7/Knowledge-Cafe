const getTheLS = () => {
    let ls = {
        readList:[],
        bookMarkList:[]
    }
    const lsExist = localStorage.getItem('knowledge')
    lsExist ? ls = JSON.parse(lsExist) : localStorage.setItem('knowledge', JSON.stringify(ls))
    return ls
}


const addToLs = (id, property) =>{
    let storedLS = getTheLS()
    storedLS[property]=[...storedLS[property], id]
    localStorage.setItem('knowledge', JSON.stringify(storedLS))
}

export {
    getTheLS,
    addToLs
}