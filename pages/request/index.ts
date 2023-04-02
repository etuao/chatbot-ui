import { ChatBody } from '@/types/chat';
const handleSend = async (content: string) => {
  return new Promise(async (resolve) => {
    try {
      const chatBody: ChatBody = {
        model: {
          id: 'gpt-3.5-turbo',
          name: 'Default (GPT-3.5)',
        },
        messages: [
          {
            role: 'user',
            content,
          },
        ],
        key: '',
        prompt: '',
      };

      const controller = new AbortController();
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify(chatBody),
      });

      if (!response.ok) {
        return;
      }

      const data = response.body;

      if (!data) {
        return;
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let text = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        text += chunkValue;
      }
      resolve(text);
    } catch (res) {
      resolve(false);
    }
  });
};
export { handleSend };
