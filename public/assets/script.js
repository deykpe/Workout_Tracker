console.log('javascript')

$('#save').on('click', function (e){
    e.preventDefault()
    var data = {
        workoutname: $('#workoutname').val()
        
        // exercise: [{
        //     exercisename: $('#exercisename').val(),
        //     numberofreps: $('#numberofreps').val()
        // }]
    }
        console.log(data)

    $.ajax({
        type: 'POST',
        url: '/api/newworkout',
        data: data,
        success: function(data) {
            console.log(data)
            $('#hi').append(`<p>workoutname-${data.workoutname}</p> <p>id:${data._id}</p>`)
            $('#after').append(`workout:${data.workoutname}`)
            $('#new').attr('data-id', data._id)
        }
    })
})

$('#new').on('click', function (e){
    e.preventDefault()
    var data = {
        
        
            exercisename: $('#exercisename').val(),
            numberofreps: $('#reps').val()
        
    }
        console.log(data)
    var id = $(this).attr('data-id')
    console.log(id)
    $.ajax({
        type: 'PUT',
        url: '/api/addexercise/' + id,
        data: data,
        success: function(data) {
            console.log(data)
           
            location.reload()
            // $('#after')(`workout:${data.workoutname}`)
        }
    });
});


$.ajax({
    type: 'GET',
    url: '/api/alltransaction',
   
    success: function(data) {
        console.log(data)
        var fitness
        var exercise

        for (i = 0; i <data.length; i++) {
            fitness += `<div>
            
            <h1 class='goaway'>${data[i]._id}</h1>
            <h1>workoutname: ${data[i].workoutname}</h1>
           
            </div>`
        for (j = 0; j <data[i].exercise.length; j++) {
             exercise += `<div>
            
            <h1>exercisename: ${data[i].exercise[j].exercisename}</h1>
            <h1>numberofreps: ${data[i].exercise[j].numberofreps}</h1>
          
            </div>`
        }

        fitness += exercise
        exercise = ''
        }
        $('#after').append(fitness)
    }
});