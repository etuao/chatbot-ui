import { Writable } from 'stream';
import { Configuration, OpenAIApi } from 'openai';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 7,
  allowEmptyFiles: false,
  multiples: false,
};

function formidablePromise(
  req: NextApiRequest,
  opts?: Parameters<typeof formidable>[0],
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = <T = unknown>(acc: T[]) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

export const config = {
  runtime: 'edge',
  api: {
    bodyParser: false,
  },
};

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const chunks: never[] = [];

    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

    // @ts-ignore
    // const testStream = fs.createWriteStream(files?.image.filepath);
    // console.log('testStream :>> ', testStream);

    console.log('fields :>> ', fields);
    console.log('files :>> ', files);

    const key = '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';
    const prompt = '加一朵小红花';
    const configuration = new Configuration({
      apiKey: key || process.env.OPENAI_API_KEY,
      baseOptions: {
        adapter: fetchAdapter,
      },
    });
    const openai = new OpenAIApi(configuration);

    const response: any = await openai.createImageEdit(
      // @ts-ignore
      files?.image,
      prompt,
      4,
      '256x256',
    );

    return res.status(204).json({
      status: 'ok',
      message: 'Files were uploaded successfully',
      ...response.data,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;
