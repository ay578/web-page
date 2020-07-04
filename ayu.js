var head=`<tr>
<th>todo</th>
<td colspan="2">action</td>
</tr>`
var rows=""
var todos=[]

function addtodo(){
  alert("sukses")
  var nama=document.getElementById("judul").value
  todos.push(nama)
  gettodo()
}

function gettodo(){
  rows=""
  todos.forEach((todo, index)=> {
    rows+= `<tr>
    <th>${todo}</th>
    <td>	<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
      <label for="vehicle1"> sudah</label></td>
      <td><a onclick="deletetodo(${index})">hapus</a></td></tr>`
    
  })
  document.getElementById("todostable").innerHTML=head+rows
}

function deletetodo(index){
  todos.splice(index,1)
  alert(todos)
  gettodo()
  // todos.forEach((todo, idx)=> {
  //   if(idx !== index){
  //     rows+= `<tr>
  //   <th>${todo}</th>
  //   <td>	<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  //     <label for="vehicle1"> sudah</label></td>
  //     <td><a onclick="deletetodo(${index})">hapus</a></td></tr>`
    
  //   }
  // })
  // document.getElementById("todostable").innerHTML=head+rows
}