import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
export const sendMessage = async (req, res) => {
     try {
          const { message } = req.body;
          const { id: recieverId } = req.params;
          const senderId = req.user._id;

          let conversation = await Conversation.findOne({
               participants: { $all: [senderId, recieverId] },
          });

          if (!conversation) {
               conversation = await Conversation.create({
                    participants: [senderId, recieverId],
               });
          }

          const newMessage = new Message({
               senderId,
               recieverId,
               message,
          });
          if (newMessage) {
               conversation.messages.push(newMessage._id);
          }

          // await conversation.save();
          // await newMessage.save();

          await Promise.all([conversation.save(), newMessage.save()])

          res.status(201).json({ message: "Message sent successfully", newMessage });
     } catch (error) {
          console.log('Problem in sendMessage controller', error.message)
          res.status(500).json({ error: "Internal server error" })
     }
}

export const getMessages = async (req, res) => {
     try {

          const { id: userToChatId } = req.params;
          const senderId = req.user._id;

          const conversation = await Conversation.findOne({
               participants: { $all: [senderId, userToChatId] }
          }).populate("messages")
          if(!conversation){
               return res.status(201).json([]);
          }
          const messages = conversation.messages
          // console.log(messages.map((item)=>item.message))  
          res.status(201).json(messages);

     } catch (error) {
          console.log('Problem in getMessage controller', error.message)
          res.status(500).json({ error: "Internal server error" })
     }
}