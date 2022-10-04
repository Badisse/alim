module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            debts: [{value: Number, date: Date}],
            totalDebt: Number,
            last_modified: Date
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Customer = mongoose.model("customer", schema);
    return Customer;

}