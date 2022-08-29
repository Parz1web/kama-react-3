import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.SendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className="dialogs">
      <div className="dialogs-items">{dialogsElements}</div>
      <div className="border-left border-2 border-black mx-2"></div>
      <div className="dialog">
        <div className="messages">
          <div>{messagesElements}</div>
          <div className="sendMessage">
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message"
                className="border-gray-400 border-2"
              ></textarea>
            </div>
            <div>
              <button
                className="borderDef ml-2 p-2 border-gray-400"
                onClick={onSendMessageClick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
