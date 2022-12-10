interface QuestionListDto {
  questions: QuestionDto[],
}

interface QuestionDto {
  questionId: number,
  content: string,
  createdAt?: string,
  userId?: string,
  userNickname?: string,
  isAnswerPrivate?: boolean,
  numberOfAnswers?: number,
  didAnswer?: boolean,
  isAnswerReadable?: boolean,
}