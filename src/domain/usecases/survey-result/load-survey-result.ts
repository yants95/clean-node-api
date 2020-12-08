import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  loadSurveyById: (surveyId: string) => Promise<SurveyResultModel>
}
