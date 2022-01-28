

// $('#add_user').submit((event) =>{
//   return confirm("Are you sure you want to proceed?");
// });

$('#update_user').submit((event) =>{
//   return confirm("Are you sure you want to proceed?");
    event.preventDefault();

    var unindexed_array = $("#update_user").serializeArray();
    var data = {};
    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    })
    // console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
});

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do You Really Want to Delete this Record?")){
            $.ajax(request).done(function(response){
                window.location.reload();    
            });
            
        }
        alert("Record Deleted Successfully");
    });
}