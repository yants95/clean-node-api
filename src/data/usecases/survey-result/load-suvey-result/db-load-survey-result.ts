import { LoadSurveyResultRepository, SurveyResultModel, LoadSurveyResult } from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: LoadSurveyResultRepository) {}

  async loadSurveyById (surveyId: string): Promise<SurveyResultModel> {
    const surveyResult = await this.loadSurveyResultRepository.loadSurveyById(surveyId)
    return surveyResult
  }
}
