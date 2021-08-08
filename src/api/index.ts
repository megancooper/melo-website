const {NEXT_PUBLIC_MELO_API} = process.env;

const Api = {
  subscribe: async (email: string) => {
    const res = await fetch(`${NEXT_PUBLIC_MELO_API}/stay-updated`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();

    if (!res.ok) return data.error;

    return null;
  },
  feedback: async (email: string, feedback: string) => {
    const res = await fetch(`${NEXT_PUBLIC_MELO_API}/feedback`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email || '',
        feedback,
      }),
    });

    const data = await res.json();

    if (!res.ok) return data.error;

    return null;
  },
};

export default Api;
