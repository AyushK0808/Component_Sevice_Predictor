import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';

@Injectable()
export class GeminiService {
  private readonly model;

  constructor() {
    // Initialize the Gemini model using the API key from the environment variable
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async createChatCompletion(messages: ChatCompletionMessageDto[]) {
    const prompt = messages.map(msg => msg.content).join('\n'); // Combine messages into a single prompt
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}