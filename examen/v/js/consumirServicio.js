$(document).ready(function(){
    for(var i=1; i<15; i++){
        $.ajax({
            dataType: "json",
            url: "https://jsonplaceholder.typicode.com/posts/"+i,
            success: function(resp){
                $("#rows").append(`
                    <tr>
                        <td>`+resp.userId+`</td>
                        <td>`+resp.id+`</td>
                        <td>`+resp.title+`</td>
                        <td>`+resp.body+`</td>
                    </tr>
                `);
            }
        });
    }
});