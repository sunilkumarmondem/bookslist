var myapp = angular.module("mymodule",[]);

myapp.controller("firstcontrol",function($scope){
  $scope.message="hello";
  $scope.ebk = false;
  $scope.pback = false;

/*$scope.color = {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255)
    };*/

  $scope.selectedRang = 0;  
  $scope.maxPrice = 40;
  $scope.selectPrice = false;

  var books=[
              {"book":"Eloquent Javascript","author":"Mariijn Haverbeke","price":"31.99","type":"Paperback"},
              {"book":"Javascript:The good parts","author":"Douglas crockford","price":"19.99","type":"Paperback"},
              {"book":"Javascript:The Definitive Guide","author":"David Flanagan","price":"29","type":"ebook"},
              {"book":"You don't know js","author":"Kyle simpson","price":"2.99","type":"Paperback"},
              {"book":"Clean code:A handbook of Agile Software craftsmanship","author":"Robert c.Martin","price":"35","type":"ebook"},
              {"book":"Introduction to Algorithms","author":"Thomas H.corman","price":"35","type":"ebook"}
            ];

  loadData();

  $scope.rangePrice = function()
  {
    if($scope.selectedprice){}
      $scope.selectPrice = true;
      loadData1();

  
  }


  $scope.ebookfilter=function(){
      if($scope.ebk)
      {
        $scope.ebk = false;
      }
      else
      {
        $scope.ebk = true;
      }

      loadData();
  }
  $scope.paperfilter=function(){
   if($scope.pback)
   {
    $scope.pback = false;
   } 
   else
   {
    $scope.pback = true;
   }

   loadData();

  }


  function loadData()
  {

  list = [];

    if($scope.ebk == true  && $scope.pback == true  )
    {

      console.log("BOTH true");
      
      books.forEach(function(book){
      if((book.type == 'ebook' || book.type == 'Paperback') )
         list.push(book);
       
      })

      console.log("List " + list);
      $scope.books = list;

    }
       

    else if( $scope.ebk ==true )
    {
       console.log("EBBOK true");
      
      books.forEach(function(book){
        if(book.type == 'ebook' )
         list.push(book);
       
      }) 
      

      $scope.books = list;

    }
    
    else if($scope.pback==true)
    {
       console.log("PBACK true");
      
        books.forEach(function(book){
        if(book.type == 'Paperback' )
         list.push(book);
       
        })
        $scope.books = list;
    }
         else if($scope.selectPrice==true)
    {
        books.forEach(function(book){
        if(book.price <= $scope.selectedRang)
         list.push(book);
        })
        $scope.books = list;   
    }
    else
    {
        $scope.books=books;
        $scope.sortcolumn="book";
    }

    $scope.selectPrice = false;

  


  }


 function loadData1()
  {

  list = [];

    
        if($scope.ebk == true && $scope.pback == true && $scope.selectPrice==true )
    {

      console.log("BOTH true");
      
      books.forEach(function(book){
      if((book.type == 'ebook' || book.type == 'Paperback') && book.price <= $scope.selectedRang)
         list.push(book);
      
      })

      console.log("List " + list);
      $scope.books = list;

    }

    
    else if( $scope.ebk ==true && $scope.selectPrice == true  )
    {
       console.log("EBBOK true");
      
      books.forEach(function(book){
        if(book.type == 'ebook' && book.price <= $scope.selectedRang)
         list.push(book);
       
      }) 
      

      $scope.books = list;

    }
    
     else if($scope.pback==true && $scope.selectPrice==true )
    {
       console.log("PBACK true");
      
        books.forEach(function(book){
        if(book.type == 'Paperback' && book.price <= $scope.selectedRang)
         list.push(book);
      
        })
        $scope.books = list;
    }
    else if($scope.selectPrice==true)
    {
        books.forEach(function(book){
        if(book.price <= $scope.selectedRang)
         list.push(book);
        })
        $scope.books = list;   
    }
    else
    {
        $scope.books=books;
        $scope.sortcolumn="book";
    }

    $scope.selectPrice = false;

  


  }
 


    

    

     

});
