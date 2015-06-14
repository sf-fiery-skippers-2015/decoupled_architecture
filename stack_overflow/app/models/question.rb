class Question < ActiveRecord::Base
  has_many :answers
  #attr_accessor :title, :content, :id
end
