
const selectRecord = require('./selectRecord/index');
const updateRecord = require('./updateRecord/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'selectRecord':
      return await selectRecord.main(event, context);
    case 'updateRecord':
      return await updateRecord.main(event, context);
  }
};
