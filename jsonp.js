const jsonp=(url)=>{
    return new Promise((resolve,reject)=>{
        const random=Math.random()
        let callback =`frankJsonp`+random;
        console.log(callback);
        window[callback]=(data)=>{
            resolve(data)
            
        }
        const script=document.createElement('script')
        script.src(`${url}?fuctionName=${functionName}`)
       
        script.onload=()=>{
            
           script.remove()
        }
        script.onerror=()=>{
            reject()
        }
        document.body.appendChild(script)
    }
    )
}
jsonp('https://qq.com/friends.json').then((data)=>{
         console.log(data)
},()=>{

})