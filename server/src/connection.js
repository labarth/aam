import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/aam', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

export const getUsers = async () => {
  const usersSchema = new mongoose.Schema();
  const usersModel = mongoose.model('users', usersSchema);

  const users = await usersModel.find();

  console.log(users, '@@@');
};
