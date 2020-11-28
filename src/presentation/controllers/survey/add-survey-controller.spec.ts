import { HttpRequest, Validation } from './add-survey-controller-protocols'
import { AddSurveyController } from './add-survey-controller'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }]
  }
})

describe('AddSurvey Controller', () => {
  test('should call Validation with correct values', async () => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return null
      }
    }

    const validationSub = new ValidationStub()
    const validateSpy = jest.spyOn(validationSub, 'validate')
    const sut = new AddSurveyController(validationSub)
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })
})
