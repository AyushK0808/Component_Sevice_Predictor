const DEFAULT_ROLE = "user";

export async function createChatCompletion(content: string) {
  const messages = [
    {
      role: DEFAULT_ROLE,
      content,
    },
  ];

  try {
    const response = await fetch('http://localhost:3001/gemini/chatCompletion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    // Check if response.ok is true to ensure the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse response text
    const responseText = await response.text();

    // Optional: You can also log the raw responseText if needed for debugging
    console.log(responseText);

    // Optionally parse JSON if the response is JSON
    // Uncomment if your server response is JSON and needs parsing
    // const responseJson = JSON.parse(responseText);
    // return responseJson;

    return responseText;
  } catch (error) {
    // Handle errors and log them
    console.error('Error fetching chat completion:', error);
    throw error;
  }
}

  
