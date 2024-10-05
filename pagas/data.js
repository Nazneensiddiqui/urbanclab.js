async function dataShow() {
    let mytable = `
 <table border="1px" width="1200px" bgcolor="lightblue" align="center"  height="50px">
          <tr height="30px" align="center">
       <th>ID</th>
       <th>Customer Name</th>
       <th>Phone No</th>
       <th>Adderss</th>
       <th>City</th>
       <th>Date</th>
       <th>Service</th>

      </tr>
      `;
  
    let url = "http://localhost:3000/urbanclab/";
    let myobj = await fetch(url);
    console.log(myobj);
  
    let mydata = await myobj.json();  //array of object me data deta he
    console.log(mydata);
  
    mydata.map((key) => {
      mytable += `
           <tr bgcolor="white" height="30px" align="center">
             <td>${key.id}</td>
             <td>${key.customername}</td>  
             <td>${key.phoneno}</td>
             <td>${key.address}</td>
             <td>${key.city}</td>
             <td>${key.date}</td>
             <td>${key.service}</td>
           </tr>
        `;
    });
  
    mytable += `</table>`;
    document.getElementById("demo").innerHTML = mytable;
  }
  
  dataShow();
