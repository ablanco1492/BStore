// product mongoose model

const mongoose = require('mongoose'),
    productSchema = new mongoose.Schema({
        tags: [{ text: { type: String, required: true, unique: true }, color: { type: String, required: true } }],
        type: { type: String },
        sizes: [{ type: Number, required: true }],
        colors: [{ type: String, required: true }],
        categories: [{ type: String, required: true }],
        brands: [{ type: String, required: true }],
        name: { type: String, required: true },
        model: { type: String, required: true },
        imgUrl: { type: String, required: true },
        description: { type: String },
        showoff: { type: Boolean, default: false },
        price: { type: Number, required: true },
        previousPrice: { type: Number },
        state: { type: String, required: true, minlength: 2, maxlength: 2 }
    });

const product = mongoose.model('product', productSchema);

