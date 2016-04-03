"use strict";


/**
 * UserProfile schema
 */
module.exports = {
    phone: String,  // format: 0912345678
    addressArea: String,
    addressCity: String,
    addressDetail: String,
    hometown: String,
    birthday: Date,
    educations: [{
        stage: { type: String, enum: ["國小", "國中", "高中", "大學", "碩士", "博士"] },
        school: String,
        depart: String
    }]
};
