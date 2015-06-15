$(document).on("page:change",function(){
  questionsIndex();
  // questionShow();

})

var questionsIndex = function(){
  if ($(".questions-index").length) {
    $.ajax({
        url: 'http://localhost:3000/questions_index',
        type: 'get'
    }).done(function(data) {
      data.questions.forEach(function(question){
        appendQuestion(question);
      })
    }).fail(function() {
        console.log('Questions index load failed.');
    });

    $('#ask').on('click', function(event){
       $('#form_question').css("display", "inline-block");
    });

    $('#form_question').on('submit', function(event){
      event.preventDefault();
      $form = $(this);
      $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'post',
        data: $(this).serialize()
      }).done(function(data) {
        $form.each(function(){this.reset();});
        console.log(data);
        $('#questions_container').append(data);
      }).fail(function() {
        console.log('you fucked up.');
      });
    });
  };
}

var appendQuestion = function(question){
  $("#questions_container").append(questionLink(question))
  $("#questions_container").append("<content>" + question.content + "</content>")
};

// var questionShow = function(){
//   if ($(".questions-show").length) {
//     var urlString = 'http://localhost:3000/questions/';
//     //debugger
//     $.ajax({
//         url: urlString,
//         type: 'get'
//     }).done(function(data) {
//         data.forEach(function(question){
//           appendQuestion(question);
//           //appendQuestion('<%= escape_javascript JSON.parse(question) %>')
//         })
//     }).fail(function() {
//         console.log('may your jimmies remain unrustled');
//     });
//   }
// }

var questionLink = function(question){
  return "<h3><a href='http://localhost:3000/questions/" + question.id + "'>" + question.title + "</a></h3>"
}

