import { DbLoadSurveyResult } from './db-load-survey-result'
import { mockLoadSurveyResultRepository } from '@/data/test'
import { LoadSurveyResultRepository } from '@/data/protocols/db/survey/survey-result/load-survey-result-repository'

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
})
