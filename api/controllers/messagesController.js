const createMessage = (request, response) => {
  const {
    receiverId,
    body,
  } = request.body;

  return response.json([body, receiverId]);
}


const getMessages = (request, response) => {
  return response.json('messages');
};

module.exports = {
  createMessage,
  getMessages
};
