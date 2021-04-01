'use strict';

module.exports = (database, dataType) => {
    const test1 = database.define('test1', {
        id: { field: 'id', type: dataType.INTEGER, primaryKey: true, autoIncrement: true},
        createdAt: { field: "created_at", type: dataType.DATE },
        updatedAt: { field: "updated_at", type: dataType.DATE },
    }, {
        classMethod: {},
        tableName: 'tb_test1',
        underscore: true, //카멜케이스
        timestamps: true
    });

    return test1;
}
