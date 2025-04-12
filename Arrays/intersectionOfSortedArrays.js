function intersection(nums1, nums2){

    let n = nums1.length;
    let m = nums2.length;
    let vis = new Array(m).fill(0);
    let ans = [];

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(nums1[i] === nums2[j] && vis[j] === 0){
                ans.push(nums1[i]);
                vis[j] = 1;
                break;
            }
        }

        //if(nums2[j] >  nums1[i]) break; //if arrays are sorted break out early
    }

    return ans;
}



//optimal solution
function optimalIntersection(nums1, nums2){
    nums1.sort((x,y) => x-y);
    nums2.sort((x,y) => x-y);

    let n = nums1.length;
    let m = nums2.length;
    let ans = [];

    let i = 0;
    let j = 0;

    while(i<n && j<m){
        if(nums1[i] < nums2[j]){
            i++;
        }else if(nums2[j] < nums1[i]){
            j++;
        }else{
            ans.push(nums1[i]);
            i++;
            j++;
        }
    }

    return ans;
}

let nums1 = [1,2,2,3,4,5,3,2,6];
let nums2 = [1,1,2,2,3,4,6,6];
console.log(intersection(nums1, nums2));
console.log(optimalIntersection(nums1, nums2));