export const getAiCommResponse = async (prompt) => {
  try {
    const res = await fetch(`/api/chat?prompt=${prompt}`);
    const data = await res.json();
    console.log(data);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
