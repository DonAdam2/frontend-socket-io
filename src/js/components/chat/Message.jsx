const Message = ({ username, content }) => (
  <p className="message">
    {username}: {content}
  </p>
);

export default Message;
