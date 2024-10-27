
export default function basicOps(products,searchTerm,sortDir,currentCategory,pageSize,pageNum){
    /* Filtering->hiding the elements */
    let filterArr = products
    if(searchTerm !== ''){
      
      filterArr = filterArr.filter((product)=>{
        let lowerSearchTerm = searchTerm.toLowerCase();
        let lowerTitle = product.title.toLowerCase();
        return lowerTitle.includes(lowerSearchTerm)
      })
    }
  
     // sorting -> rearragin
     let filteredSortedArr = filterArr
     if(sortDir !== 0){
      // increasion
      if(sortDir === 1){
        filteredSortedArr = filteredSortedArr.sort(inComparator)
  
      }else{
        filteredSortedArr = filteredSortedArr.sort(decComparator)
      }
    }
  
    // to filter the product based on category of product
    let filteredSortedArrCategory = filteredSortedArr
    if(currentCategory !== "All Categories"){
      console.log(`executed for ${currentCategory}`)
      filteredSortedArrCategory = filteredSortedArrCategory.
                                  filter((product)=>{
        return product.category === currentCategory
      })
      console.log(`the current product based on currentCategory:`)
      console.log(filteredSortedArrCategory)
    }

    let totalPages = Math.ceil(filteredSortedArrCategory.length / pageSize);
    //console.log(`totalPages:${totalPages}`)
   /*********Pagenation*********/
   let sidx = (pageNum - 1) * pageSize;//(1 - 1) * 4 => 0 * 4 => 0
   let eidx = sidx  + pageSize;// 0 + 4 => 4
   //console.log(sidx,eidx);
   filteredSortedArrCategory = filteredSortedArrCategory.slice(sidx,eidx);
   //console.log(filteredSortedgroupByArr);

   return {filteredSortedArrCategory , totalPages };
}

function inComparator(product1,product2){
    if(product1.price > product2.price){
      return 1
    }else{
      return -1
    }
  }
  
  function decComparator(product1,product2){
    if(product1.price < product2.price){
      return 1
    }else{
      return -1 
    }
  }

/*
[0,3]
[4,7]
[8,11]
[12,15]
[16,19]
*/