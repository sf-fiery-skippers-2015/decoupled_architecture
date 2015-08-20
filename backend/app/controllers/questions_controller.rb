class QuestionsController < ApplicationController
  before_action :allow_cross_domain

  def index
    questions = Question.all
    questions = questions.to_json


    render json: questions
  end


  def create
    new_question= Question.new({title: params[:title]})

    if new_question.save
      render json: new_question
    end

  end

  private

    def allow_cross_domain
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end


end
