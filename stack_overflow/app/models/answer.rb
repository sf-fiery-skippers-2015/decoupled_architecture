class Answer < ActiveRecord::Base
  belongs_to :question
  #attr_accessor :id, :title, :content, :question_id
end
