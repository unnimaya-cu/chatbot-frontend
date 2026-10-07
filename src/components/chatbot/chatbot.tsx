import { useState } from "react";
import "./chatbot.css";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const BaseUrl= import.meta.env.VITE_API_URL
  // console.log("BaseUrl",BaseUrl);
  
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    const userMessage: Message = {
      id: Date.now(),
      text: userText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${BaseUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("response is",data);
      
      // Support common backend response payload keys (reply, message, response, text)
      const botText =
        data.reply || data.message || data.response || data.text || (typeof data === 'string' ? data : JSON.stringify(data));

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botText,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error connecting to backend API:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I couldn't connect to the server.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      {/* Header */}
      <div className="chat-header">
        <div>
          <h3>AI Assistant</h3>
          <span>● Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-body">
        {messages.map((message) => (
          <div key={message.id} className={`message-row ${message.sender}`}>
            <div className="message">{message.text}</div>
          </div>
        ))}
        {loading && (
          <div className="message-row bot">
            <div className="message">Thinking...</div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

