const Message = ({ username, content, isMine }) => (
  <p className={`message${isMine ? ' message--mine' : ''}`}>
    <span className="username">{username}</span>: {content}
  </p>
);

export default Message;
