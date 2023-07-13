import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const chat = () => {
  return (
    <div>
      <iframe
       src="https://www.chatbase.co/chatbot-iframe/YsBj9sa-cJW1_ZBOvT-TD"
       width="100%"
       style="height: 100%; min-height: 700px"
       frameborder="0"
      ></iframe>
    </div>
  );
};

export default chat;
