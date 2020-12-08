import { LoadSurveyResultRepository } from '@/data/protocols/db/survey/survey-result/load-survey-result-repository'
import { mockSurveyResultModel } from '@/domain/test'
import { SurveyResultModel } from '../save-survey-result/db-save-survey-result-protocols'
import { DbLoadSurveyResult } from './db-load-survey-result'

describe('DbLoadSurveyResult Usecase', () => {
  test('should call LoadSurveyResultRepository', async () => {
    class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
      async loadSurveyById (surveyId: string): Promise<SurveyResultModel> {
        return await Promise.resolve(mockSurveyResultModel())
      }
    }
    const loadSurveyResultRepositoryStub = new LoadSurveyResultRepositoryStub()
    const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)
    const loadSurveyById = jest.spyOn(loadSurveyResultRepositoryStub, 'loadSurveyById')
    await sut.loadSurveyById('any_survey_id')
    expect(loadSurveyById).toHaveBeenCalledWith('any_survey_id')
  })
})
