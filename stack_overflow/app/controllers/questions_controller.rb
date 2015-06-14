class QuestionsController < ApplicationController
  include HTTParty

  def index

  end

  def questions_index
    questions =  HTTParty.get('http://localhost:3003/questions')
    # p'*'*90
    p questions
    # p'*'*90

    render json: {questions: questions}
    #return questions
  end

  def create

  end

  def show
    # make HTTParty request to backend
    # get the json object
    # parse the json object & put everything into instance variables
    # render dynamically using ERB


    @question_id = params[:id]

    #p @question_id
    response = HTTParty.get("http://localhost:3003/questions/"+@question_id)
    answers = response["answers"]
    @answers = []
    @answer = Answer.new
    @question = Question.new(response["question"])
    answers.each{ |answer| @answers << Answer.new(answer) }
    # p'*'*90
    # p @answers
    # p'*'*90
  end
end
