document.getElementById('newc').addEventListener('submit',newc);
function newc(e){
    e.preventDefault();
let country=document.getElementById('country').value;

let url1=`https://restcountries.eu/rest/v2/region/${country}`;

getdata(url1);
}

function convert(s){
    var r= s.replace('https','sftp');
    return r;
 
 }

function getdata(url1){
    fetch(url1)
    .then((res)=>res.json())
    .then((data)=>{
        let output='<h1>Regions</h1>';
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