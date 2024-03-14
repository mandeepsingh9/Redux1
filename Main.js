
const red=require("redux");

InitialValue={
    count:0
}

function reducer(store=InitialValue,action)
{
     
     
      let newstore=store;
  
      if(action.type==="increment")
      {
        newstore= {count:store.count+1}
      }
      else if(action.type==="decrement")
      {
        newstore={count:store.count-1}
      }
      else if(action.type==="add")
      {
        newstore={count:store.count+5}
      }
      return newstore;

}

   

const storehandle=red.createStore(reducer);

const Subscriber=()=>{
          let obj=storehandle.getState();

          console.log(obj);        

}



storehandle.subscribe(Subscriber);


 
storehandle.dispatch({type:"increment"});
storehandle.dispatch({type:"decrement"});
storehandle.dispatch({type:"add"});