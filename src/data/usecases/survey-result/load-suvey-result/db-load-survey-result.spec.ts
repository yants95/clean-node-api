import { LoadSurveyResultRepository } from './db-load-survey-result-protocols'
import { DbLoadSurveyResult } from './db-load-survey-result'
import { mockLoadSurveyResultRepository } from '@/data/test'
import { mockSurveyResultModel, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLoadSurveyResult
  loadSurveyResultRepositoryStub: LoadSurveyResultRepository
}

const makeSut = (): SutTypes => {
  const loadSurveyResultRepositoryStub = mockLoadSurveyResultRepository()
  const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)
  return {
    sut,
    loadSurveyResultRepositoryStub
  }
}

describe('DbLoadSurveyResult Usecase', () => {
  test('should call LoadSurveyResultRepository', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()
    const loadSurveyById = jest.spyOn(loadSurveyResultRepositoryStub, 'loadSurveyById')
    await sut.loadSurveyById('any_survey_id')
    expect(loadSurveyById).toHaveBeenCalledWith('any_survey_id')
  })

  test('should throw if LoadSurveyResultRepository throws', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()
    jest.spyOn(loadSurveyResultRepositoryStub, 'loadSurveyById').mockImplementationOnce(throwError)
    const promise = sut.loadSurveyById('any_survey_id')
    await expect(promise).rejects.toThrow()
  })

  test('should return surveyResultModel on success', async () => {
    const { sut } = makeSut()
    const surveyResult = await sut.loadSurveyById('any_survey_id')
    expect(surveyResult).toEqual(mockSurveyResultModel())
  })
})
