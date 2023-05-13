const conn = require('../../config/config');

const getCustomer_address = async (cus_id) => {
    try {
        const [data, filed] = await conn.query('select * from customer_address where customer_id = ?', [
            cus_id
        ])
        return data
    } catch (er) {
        console.log("Error at Get customer_address");
        console.log(er);
    }
}
module.exports.getCustomer_address = getCustomer_address;

const add_address = async (cus_id, new_address) => {
    console.log(cus_id, new_address);
    var new_address = new_address.address;
    const connect = await conn.getConnection();
    await connect.beginTransaction()

    try {
        const insert_address = await
            connect.query(
                'insert into customer_address(customer_id, name, phone, address, provices, amphur, tumbon, zib_code) values(?,?,?,?,?,?,?,?)',
                [cus_id, new_address.name, new_address.phone, new_address.address, new_address.provices,
                    new_address.amphur, new_address.tumbon, new_address.zib_code]
            )
        await connect.commit()
        return { status: true, insert: insert_address };
    } catch (er) {
        await connect.rollback()
        console.log("Error at Get add_address");
        console.log(er);
        return { status: false };
    } finally {
        console.log("End insert new address");
        connect.release()
    }
};
module.exports.add_address = add_address;

const create_order = async (order) => {
    console.log("CheckOut Time: ", order.date_checkout);
    console.log(order);
    const connect = await conn.getConnection();
    await connect.beginTransaction()
    try {
        const attr = "(customer_id , price, pay_type, payment_status, address_number, date_checkout, order_status, discount, note)";
        const create = await connect.query(
            "insert into orders" + attr + " values(?,?,?,?,?,?,?,?,?)", [
            order.customer_id,
            order.price,
            order.pay_type,
            order.payment_status,
            order.address_number,
            order.date_checkout,
            order.order_status,
            order.discount, 
            order.note
        ]
        );

        order.cart.forEach(async item => {
            await connect.query(
                "insert into product_order(order_id, product_id, size, amount, price) values(?,?,?,?,?)",[
                    create[0].insertId, item.product_id, item.size, item.amount, item.price
                ]
            );
        });

        const del = await connect.query('delete from cart where customer_id = ?', [order.customer_id]);
        console.log("Delete :", del);

        await connect.commit();
        return { create: create[0].insertId, status: true };
    } catch (error) {
        console.log("Error at Create Order");
        console.log(error);
        await connect.rollback();
        return { error: error, status: false };
    } finally {
        connect.release()
        console.log("end Create Order");
    }
};
module.exports.create_order = create_order;


