import type { NextPage } from 'next';
import React from 'react';

const Page: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const maskFileRef = React.useRef<HTMLInputElement | null>(null);

  const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    /* Prevent form from submitting by default */
    e.preventDefault();

    /* If file is not selected, then show alert message */
    if (!inputFileRef.current?.files?.length) {
      alert('Please, select file you want to upload');
      return;
    }

    setIsLoading(true);

    /* Add files to FormData */
    const formData = new FormData();
    formData.append('image', inputFileRef.current.files[0]);

    if (maskFileRef.current?.files?.length) {
      formData.append('mask', maskFileRef.current.files[0]);
    }

    formData.append('prompt', '一只可爱的小花狗');
    formData.append(
      'key',
      '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',
    );

    /* Send request to our api route */
    const response = await fetch('/api/images/edits', {
      method: 'POST',
      body: formData,
    });

    const body = (await response.json()) as {
      status: 'ok' | 'fail';
      message: string;
    };

    alert(body.message);

    if (body.status === 'ok') {
      inputFileRef.current.value = '';
      // Do some stuff on successfully upload
    } else {
      // Do some stuff on error
    }

    setIsLoading(false);
  };

  return (
    <form style={{ background: '#fff' }}>
      <div>
        <input type="file" ref={inputFileRef} />
      </div>
      <div>
        <input type="file" ref={maskFileRef} />
      </div>
      <div style={{ marginTop: 10 }}>
        <input
          type="submit"
          value="Upload"
          disabled={isLoading}
          onClick={handleOnClick}
        />
        {isLoading && ` Wait, please...`}
      </div>
    </form>
  );
};

export default Page;
