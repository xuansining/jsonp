// const request=new XMLHttpRequest()
// request.open('GET','http://qq.com:8888/friends.json')
// request.onreadystatechange=()=>{
//     if(request.readyState===4&&request.status<400){
//         console.log(request.response);
//     }
// }
// request.onerror=()=>{

// }
// request.send()
const random=Math.random()
const fucName='frankcom'+random

const script=document.createElement('script')
script.src=`http://qq.com:8888/friends.js?callback=${fucName}`
script.onload=()=>{
    

}
script.onerror=()=>{

}
document.body.appendChild(script)
window[fucName]=(data)=>{
    console.log(data);
}

