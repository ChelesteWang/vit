import React, { useState } from 'react';

import Button from '@/components/Button';

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const hello = () => {
    setData(undefined);
    setError(undefined);
    setLoading(true);
    fetch('/api/hello?name=@vitjs/vit', {
      method: 'get',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('data', json);
        setData(json);
      })
      .catch((err) => {
        console.log('error', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const version = () => {
    setData(undefined);
    setError(undefined);
    setLoading(true);
    fetch('/api/version', {
      method: 'get',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('data', json);
        setData(json);
      })
      .catch((err) => {
        console.log('error', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        marginTop: 16,
        padding: '16px 24px',
        border: 'red 2px dashed',
      }}
    >
      Welcome Page
      <br />
      <Button onClick={hello}>mock: hello</Button>
      <Button onClick={version}>mock: version</Button>
      <div style={{ width: '100%', minHeight: 100 }}>
        {loading && <div>{'loading...'}</div>}
        {data && <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(data, null, 2)}</div>}
        {error && <div>Something went wrong...</div>}
      </div>
    </div>
  );
}
