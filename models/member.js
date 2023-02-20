const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    email: {
      type: String,
      required: false,
    },
    item: {
      type: Boolean,
      required: false,
      default: false,
    },
    itemChosen: {
      type: String,
      required: false,
    },
    picnic: {
      type: Boolean,
      required: false,
      default: false,
    },
    bowling: {
      type: Boolean,
      required: false,
      default: false,
    },
    hotel: {
      type: Boolean,
      required: false,
      default: false,
    },
    talent: {
      type: Boolean,
      required: false,
      default: false,
    },
    guests: {
      guest1: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
        },
      },
      guest2: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest3: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest4: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest5: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest6: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest7: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest8: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest9: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      guest10: {
        firstName: {
          type: String,
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
        talentShow: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
