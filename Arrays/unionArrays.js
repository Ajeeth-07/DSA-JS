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


//OPTIMAL APPROACH(only if arrays are sorted)

    function optimalUnion(a,b){

        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);

        let unionArr = [];
        let n1 = a.length;
        let n2 = b.length;
        let i = 0;
        let j = 0;

        

        while(i<n1 && j <n2){
            if(a[i]<b[j]){
                if(unionArr.length === 0 || unionArr.at(-1) !== a[i]){
                    unionArr.push(a[i]);
                }
                i++;
            }else{
                if(unionArr.length === 0 || unionArr.at(-1) !== b[j]){
                    unionArr.push(b[j]);
                }
                j++;
            }
        }

        while(j<n2){
            if(unionArr.length === 0 || unionArr.at(-1) !== b[j]){
                unionArr.push(b[j]);
            }
            j++;
        }

        while(i<n1){
            if(unionArr.length === 0 || unionArr.at(-1) !== a[i]){
                unionArr.push(a[i]);
            }
            i++;
        }

        return unionArr;
    }

let c = [1, 1, 2, 3, 4, 2, 5, 6, 32];
let d = [1, 2, 3, 8, 9, 0, 5, 3, 65];

console.log(optimalUnion(c, d));