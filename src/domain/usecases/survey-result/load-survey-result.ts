import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  loadSurveyById: (surveyId: string, accountId: string) => Promise<SurveyResultModel>
}
