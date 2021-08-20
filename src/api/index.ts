const MELO_API = process.env.NEXT_PUBLIC_MELO_API;
const FEEDBACK_SECRET = process.env.NEXT_FEEDBACK_SECRET || '';

const Api = {
  subscribe: async (email: string) => {
    const res = await fetch(`${MELO_API}/api/stay-updated`, {
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
    const res = await fetch(`${MELO_API}/feedback`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        FEEDBACK_SECRET: FEEDBACK_SECRET || '',
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
