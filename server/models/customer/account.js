const conn = require('../../config/config');
const Crypt = require('../../utilities/bcrypt');

const getUser = async (customer_id) => {
    try {
        const field = 'first_name, last_name, date, email, phone, username, gender'
        const [user, cols] = await conn.query('select ' + field + ' from customers where customer_id = ?', [customer_id]);
        return user[0];
    } catch (er) {
        console.log(er);
    } finally {
        console.log("END GET USER.");
    }
};
module.exports.getUser = getUser;

const check_password = async (customer_id, password)=>{
    try{
        const [result, cols] = await conn.query('select password from customers where customer_id = ?',[customer_id]);
        console.log(result[0]);
        const check_pw = await Crypt.deCrypt(password, result[0].password);
        console.log(check_pw);
        return check_pw;
    }catch(er){
        console.log("Error at CheckPassword !");
        console.log(er);
        return false;
    }finally{
        console.log("End Check Password");
    }
};
module.exports.check_password =check_password;

const getUser_login = async (username) => {
    try {
        const [data, cols] = await conn
            .query('select customer_id, username, password from customers where username = ? or email = ?', [username, username]);
        return data[0];
    } catch (er) {
        console.log("Error at account query");
        console.log(er);
    } finally {
        console.log("END.");
    }
};
module.exports.getUser_login = getUser_login;

const create_User = async (newUser) => {
    const data = newUser;
    // console.log('my data',data);
    const trans_ = await conn.getConnection();
    await trans_.beginTransaction();
    try {
        const feild = 'first_name, last_name, date, email, phone, username, password, gender';
        const create = await trans_.query('insert into customers(' + feild + ') values(?,?,?,?,?,?,?,?)', [
            data.first_name, data.last_name, data.date, data.email, data.phone, data.username, data.password, data.gender
        ]);
        await trans_.commit();
        return { status: true, des: 'create_user' }
    } catch (er) {
        console.log("Error at create_User.");
        console.log(er);
        await trans_.rollback()
        return { status: false, des: 'create_user' }
    } finally {
        console.log("End Create_User.")
        await trans_.release();
    }
};
module.exports.create_User = create_User;

const update_user = async (customer_id, new_info) => {
    const trans_ = await conn.getConnection();
    await trans_.beginTransaction();
    try {
        if (new_info.password === '') {
            // not change Password
            const set = 'set first_name = ?, last_name = ?, date = ?, email = ?, phone = ?';
            const update = await trans_.query('update customers ' + set + ' where customer_id = ?', [
                new_info.first_name, new_info.last_name, new_info.date, new_info.email, new_info.phone, customer_id
            ]);
            console.log(update);
            await trans_.commit();
            return { status: true }
        } else {
            // change Password
            const set = 'set fisrt_name = ?, last_name = ?, date = ?, email = ?, phone = ?, password = ?';
            const update = await trans_.query('update customers ' + set + ' where customer_id = ?', [
                new_info.first_name, new_info.last_name, new_info.date, new_info.email, new_info.phone,new_info,password, customer_id
            ]);
            console.log("Change Password!", new_info.password);
            console.log(update);
            await trans_.commit();
            return { status: true }
        }
    } catch (er) {
        console.log("Error at Update User Information");
        console.log(er);
        await trans_.rollback()
        return { status: false }
    } finally {
        console.log("END UPDATE USER INFORMATION");
        trans_.release()
    }
};
module.exports.update_user = update_user;