'use strict';

module.exports = (database, dataType) => {
    const test2 = database.define('test2', {
        id: { field: 'id', type: dataType.INTEGER, primaryKey: true, autoIncrement: true},
        createdAt: { field: "created_at", type: dataType.DATE },
        updatedAt: { field: "updated_at", type: dataType.DATE },
    }, {
        classMethod: {},
        tableName: 'tb_test2',
        underscore: true, //카멜케이스
        timestamps: true
    });

    return test2;
}
