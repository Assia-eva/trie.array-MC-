//trier un array 
var eva=[-3,8,7,6,5,-4,3,2,1],i,j,x,l;
l=eva.length;
   for(i=0;i<eva.length;i++){
      for(j=0;j<eva.length;j++) {
          if(eva[i]<eva[j])
          {
              x=eva[i];
              eva[i]=eva[j];
              eva[j]=x;
          }
      }
    }
for(i=0;i<eva.length;i++){
    console.log(eva[i]);
}