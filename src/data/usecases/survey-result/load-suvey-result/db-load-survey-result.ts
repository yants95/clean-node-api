import { LoadSurveyResultRepository } from '@/data/protocols/db/survey/survey-result/load-survey-result-repository'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'
import { SurveyResultModel } from '../save-survey-result/db-save-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: LoadSurveyResultRepository) {}

  async loadSurveyById (surveyId: string): Promise<SurveyResultModel> {
    await this.loadSurveyResultRepository.loadSurveyById(surveyId)
    return null
  }
}
