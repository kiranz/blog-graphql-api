const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const UserModel = require('../../models/user');
const userType = require('../types/user').userType;

exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          let users = UserModel.find().exec();

          if (!users) {
            throw new Error('No users found');
          }

          return users;
        }
      }
    }
  }
});

