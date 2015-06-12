$(document).on('page:change', function() {
    $.ajax({
      url: 'http://localhost:3000/questions',
      type: 'get'
    }).done(function(data) {
      // debugger
      var questions = data;

      for (i=0;i< questions.length; i++){

        var html = "";

        // $(".questionsBoard").append(questions[i].title)
                // $(".questionsBoard").append(data.title)
        html = '<li>' + questions[i].title + '</li>'
        $(".questionsBoard").append(html)
      }
    }).fail(function() {
        console.log('may your jimmies remain unrustled');
    });

    $("form").on('submit', function(event){
      event.preventDefault();
      $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'post',
        data: $(this).serialize(),
        // dataType: "JSON"
      }).done(function(data){
        console.log(data)
        $(".questionsBoard").append("<li>"+ data.title+ "</li>")
        $("form").each(function(){
          this.reset();
        })

      })
    })

});
