const OLLAMA_URL = "http://127.0.0.1:11434";
const MODEL = "gpt-oss:latest";

let playerResponse = "";
let aiResponse = "";

async function sendToOllama() {
    aiResponse = "";

    const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            model: MODEL,

            messages: [
                {
                    role: "user",
                    content: playerResponse,
                },
            ],

            stream: true,

            options: {
                seed: -1,
                num_ctx: 4096,
            },
        }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        const text = decoder.decode(value, { stream: true });

        for (const line of text.split("\n")) {
            if (!line.trim()) continue;

            const data = JSON.parse(line);

            if (data.message?.content) {
                aiResponse += data.message.content;

                console.log(aiResponse);
            }
        }
    }

    return aiResponse;
}
