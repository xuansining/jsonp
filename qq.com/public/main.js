const request=new XMLHttpRequest()
request.open('GET','/friends.json')
request.onreadystatechange=()=>{
    console.log(request.response);
}
request.onerror=()=>{

}
request.send()