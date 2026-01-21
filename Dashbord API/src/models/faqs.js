const mongoose = require('mongoose')

const faqsSchema = new mongoose.Schema({
    
    question: {
        type: String,
        required: [true, 'question is required'],
        // match: /^[a-zA-Z ]{2,15}$/,
        // validate: {
        //     validator: async function (v) {
        //         const data = await this.constructor.findOne({ name: v, deleted_at: null });
        //         return !data;
        //     },
        //     message: props => `The specified data is already in use.`
        // }

    },
    answer: {
        type: String,
        required: [true, 'answer is required'],
       
    },
    status: {
        type: Boolean,
        default: 1
    },                      // 0-inactive 1- active
    order: {
        type: Number,
        default: 0,
        min: [0, 'minium value must be greater than 0'],
        max: 100
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null
    },
});

const faqsModal = mongoose.model('faqs', faqsSchema);

module.exports = faqsModal;
