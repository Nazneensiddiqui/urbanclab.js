document.getElementById('btn1').addEventListener('click',insert);

async function insert(){
  try{
    let myname = document.getElementById('name').value;
    let myphone = document.getElementById('pho').value;
    let myadd = document.getElementById('email').value;
    let mycity = document.getElementById('evey').value;
    let mydate = document.getElementById('date').value;
    let myservice = document.getElementById('evey2').value;
    

    let url  = 'http://localhost:3000/urbanclab';

    let response = await fetch(url,{
        method: "POST",
        body:JSON.stringify({
          customername : myname,
          phoneno: myphone,
           address: myadd,
           city: mycity,
           date:mydate,
           service:myservice
          }),
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    console.log(response);
    let data = await response.json();
    console.log(data);
    alert('Data Successfully added')

  }
  catch(error){
    console.error("Error:",error);
    alert('Error while adding data')
  }
  window.location.href = "data.html";
  
}
