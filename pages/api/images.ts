import { Configuration, OpenAIApi } from 'openai';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const {
      key,
      prompt,
      n = 2,
      size = '1024x1024',
    } = (await req.json()) as {
      key: string;
      prompt: string;
      n: number;
      size: '1024x1024' | '512x512' | '256x256';
    };

    const configuration = new Configuration({
      apiKey: key || process.env.OPENAI_API_KEY,
      baseOptions: {
        adapter: fetchAdapter,
      },
    });
    const openai = new OpenAIApi(configuration);
    const response: any = await openai.createImage({
      prompt,
      n,
      size,
    });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;
