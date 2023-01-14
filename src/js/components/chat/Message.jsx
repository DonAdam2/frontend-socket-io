const Message = ({ username, content }) => (
  <p className="message">
    <span className="username">{username}</span>: {content}
  </p>
);

export default Message;
