function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
}

async function tunggu(params) {
    let v;
    try{
        v = await resolveAfter2Seconds(params);
    }catch(e){
        v = await resolveAfter2Seconds(e);
    }

    return v;
}

tunggu('hahaha').then(v=>{
    console.log(v);
})