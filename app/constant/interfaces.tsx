export interface IAvailableGrants {
    _id : number 
    title : string 
    description : string 
    index ?: any
}

export interface IGrant {
    index ?: any  
    // removeGrant : any , 
    _id : number 
    title : string 
    description : string 
}

export interface IGrantListProps  {
    grants : IGrant[] 
    removeGrant ?: (id : number) => void 
}