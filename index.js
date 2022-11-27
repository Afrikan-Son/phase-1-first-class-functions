function receivesAFunction(callBack){
    callBack();
    }
    
    function returnsANamedFunction(){
        return fn = () =>{
            console.log(`returns a named function`);
        }
    }
    function returnsAnAnonymousFunction(){
      return ()=>{
            console.log(`returns an anonymous function`);
        };
    }