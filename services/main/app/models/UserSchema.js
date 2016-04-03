"use strict";

const ObjectId = mongoose.Schema.Types.ObjectId;
const Mixed = mongoose.Schema.Types.Mixed;

/**
 * User schema
 */
module.exports = {
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true, select: false},  // bcrypt
    nickname: { type: String},
    fullname: { type: String},
    userProfile: { type: ObjectId, ref: "UserProfile" },
    email: String,
    gender: { type: String, required: true, enum: ['女', '男']},
    portraitImage: { type: ObjectId, ref: 'File' },
    lastLoggedAt: { type: Date},
    department: { type: String, enum: ["幼初等部", "國高中部", "大學部", "青年部", "家庭局", "長年部", "新生" ] },
    mission: String,
    mentor: { type: ObjectId, ref: "User" },
    preference: { type: Mixed },
    restrictedTo: [{ type: ObjectId, ref: 'Role' }],
    roles: [{ type: ObjectId, ref: 'Role' }]
};
