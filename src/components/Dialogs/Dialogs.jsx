import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
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
              ></textarea>
            </div>
            <div>
              <button
                className="borderDef ml-2 p-2"
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
