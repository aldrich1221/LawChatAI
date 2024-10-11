<template>
  <div class="chat-room">
    <h2>Welcome to the AI Consultant Chat</h2>
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index">
        <strong>{{ message.sender }}:</strong> {{ message.text }}
      </div>
    </div>
    <input v-model="message" @keyup.enter="sendMessage" placeholder="Ask something..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      messages: [
        { sender: "AI Consultant", text: "Hello! How can I assist you today?" }
      ],
      username: localStorage.getItem("username") || "User"
    };
  },
  methods: {
    sendMessage() {
      if (this.message.trim()) {
        this.messages.push({ sender: this.username, text: this.message });
        this.getAIResponse(this.message);
        this.message = "";
      }
    },
    getAIResponse(userMessage) {
      // Here you can integrate with an actual AI system (e.g., GPT).
      // For now, this example will return predefined responses.
      const responses = {
        default: "Sorry, I can't assist with that. Can you please rephrase?",
        greeting: "Hi there! What would you like to know?",
        "what is AI": "Artificial Intelligence is the simulation of human intelligence in machines."
      };
      
      let aiResponse = responses.default;
      if (/hello|hi/i.test(userMessage)) {
        aiResponse = responses.greeting;
      } else if (/what is ai/i.test(userMessage)) {
        aiResponse = responses["what is AI"];
      }

      setTimeout(() => {
        this.messages.push({ sender: "AI Consultant", text: aiResponse });
      }, 1000);
    }
  }
};
</script>

<style scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: flex-end;
}

.messages {
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
}

input {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
