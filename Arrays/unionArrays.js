function unionArrays(a,b){
    let st = new Set();

    for (let i=0; i<a.length; i++){
        st.add(a[i]);
    }

    for(let i=0; i<b.length; i++){
        st.add(b[i]);
    }

    return Array.from(st).sort((x,y) => x-y);
}


let a = [1,1,2,3,4,2,5,6,32];
let b = [1,2,3,8,9,0,5,3,65];

console.log(unionArrays(a,b));


//OPTIMAL APPROACH