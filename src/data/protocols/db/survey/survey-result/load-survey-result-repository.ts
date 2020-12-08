import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResultRepository {
  loadSurveyById: (surveyId: string) => Promise<SurveyResultModel>
}
