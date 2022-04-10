url='https://restcountries.eu/rest/v2/all';
getdata(url);

function convert(s){
   var r= s.replace('https','sftp');
   return r;

}

function getdata(url){
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let output='<h1>Countries</h1>';
        data.forEach(function(c){
            output+=`
            <div>
            <ul>
            <li>${c.name}</li>
            <li>${convert(c.flag)}</li>
            <li>${c.capital}</li>
            </ul>
            </div>`
        })
        document.getElementById('output').innerHTML=output;
    })
            
}

