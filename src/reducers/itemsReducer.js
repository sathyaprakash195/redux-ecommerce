const initialData = {

    items : [ {
        
        itemName : 'Realme 5 (Crystal Purple, 32 GB) (3 GB RAM)',
        itemImage : 'https://images-eu.ssl-images-amazon.com/images/I/41GKsqweZlL._SL500_AC_SS350_.jpg',
        itemPrice : '10000'
    } ,
    {
       
        itemName : 'Realme 3 Pro (Lightning Purple, 64 GB) (4 GB RAM)',
        itemImage : 'https://images-na.ssl-images-amazon.com/images/I/71awFg9gYfL._SX679_.jpg',
        itemPrice : '12000'
    } , 
    {
       
        itemName : 'Samsung Galaxy A50 (Blue, 64 GB) (4 GB RAM)',
        itemImage : 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg',
        itemPrice : '13500'
    },
    {
      
        itemName : 'Redmi 8A (Sunset Red, 32 GB) (2 GB RAM)',
        itemImage : 'https://i01.appmifile.com/webfile/globalimg/in/cms/DFF8E0CE-D61C-6474-3F2D-831B25D07187.jpg',
        itemPrice : '9000'
    },
    {
        
        itemName : 'Cenizas Mens Cotton Hooded Full Sleeves T-Shirt',
        itemImage : 'https://images-na.ssl-images-amazon.com/images/I/71IMNzY2zlL._UL1500_.jpg',
        itemPrice : '11000'
    },
    {
        
        itemName : 'CHKOKKO Full Sleeve Cotton Casual Round Neck T Shirts for Men',
        itemImage : 'https://images-na.ssl-images-amazon.com/images/I/71krfHsT5PL._UL1500_.jpg',
        itemPrice : '14000'
    }

]

}

function itemsReducer(state=initialData , action)
{
   switch(action.type)
   {
       case 'ADD_ITEM' : return{
           ...state ,
           items : [...state.items , action.payload]
       }
   }
   return state
}
export default itemsReducer