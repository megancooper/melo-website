const MELO_API = process.env.NEXT_PUBLIC_MELO_API;

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
        FEEDBACK_SECRET: 'bx7mjb6mVpUqyLLAVIqoLlRdjHJPWbuxqckcKiIKQj1lIDKFf3Deww2NtDnJrtqVZviHl697tut8XoabZyFZ5g==',
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
