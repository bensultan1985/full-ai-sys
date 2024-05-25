import React, { useState } from "react";
import { CFormInput, CButton } from "@coreui/react";
import { getAiCommResponse } from "../services/chat/get-ai-comms";

export const UserRequestContainer = ({
  userText,
  setUserText,
  setAiResponseText,
}) => {
  const getGenAiResponse = async () => {
    const response = await getAiCommResponse(userText);
    setAiResponseText(response);
  };
  return (
    <div>
      <CFormInput
        style={{ fontSize: "18px" }}
        id="user-text"
        onChange={(e) => {
          e.preventDefault();
          setUserText(e.target.value);
        }}
      />
      <CButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          getGenAiResponse(userText);
        }}
      >
        Send
      </CButton>
    </div>
  );
};
