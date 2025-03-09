import { useEffect, useState, useRef } from "react";

interface Message {
  id?: string;
  content: string;
  senderId?: string;
  receiverId?: string;
  messageType?: string;
  timestamp?: string;
}

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const connectWebSocket = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      return; // Prevent multiple connections
    }

    console.log("Connecting to WebSocket...");
    const ws = new WebSocket(url);
    socketRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket connected");
      setIsConnected(true);
      setIsReconnecting(false);
    };

    ws.onerror = (error) => {
      console.error("❌ WebSocket error:", error);
    };

    ws.onmessage = (event) => {
      try {
        const data: Message = JSON.parse(event.data);
        
        // Since Kafka does not send 'action', just push the message to state
        console.log("📩 New message received:", data);
        setMessages((prev) => [...prev, data]);

      } catch (error) {
        console.error("❌ Error parsing WebSocket message:", error);
      }
    };

    ws.onclose = (event) => {
      console.log("🔴 WebSocket disconnected:", event.reason);
      setIsConnected(false);
      setIsReconnecting(true);
      setTimeout(connectWebSocket, 3000); // Auto-reconnect
    };
  };

  useEffect(() => {
    connectWebSocket();
    return () => socketRef.current?.close();
  }, [url]);

  const sendMessage = (message: Message) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    } else {
      console.warn("⚠️ WebSocket not connected, message not sent.");
    }
  };

  return {
    messages,
    sendMessage,
    isConnected,
    isReconnecting,
    reconnect: connectWebSocket,
  };
};

export default useWebSocket;
