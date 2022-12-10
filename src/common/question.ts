import { AxiosResponse } from 'axios';
import client from './client';

export const getQuestionList = async() => {
  try {
    const response = await client.get<AxiosResponse<QuestionDto[]>>(
      `/questions`
    );

    return response;
  } catch (e: any) {
    console.log("getQuestionList:", e);
    return e.response;
  }
}