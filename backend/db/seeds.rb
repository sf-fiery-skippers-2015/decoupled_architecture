require 'faker'

10.times do
  new_question = Question.create(
    title: Faker::Lorem.sentence + "?",
    content: Faker::Lorem.paragraph
  )
  5.times do
    new_question.answers << Answer.create(
      title: Faker::Lorem.sentence,
      content: "In my opinion," + Faker::Lorem.paragraph
    )
  end
end
