'use strict';

module.exports = (database, dataType) => {
    const systemLog = database.define('systemLog', {
        id: { field: 'id', type: dataType.INTEGER, primaryKey: true, autoIncrement: true},
        type: { field: 'type', type: dataType.STRING, allowNull: false },
        requester: { field: 'requester', type: dataType.STRING, allowNull: false },
        ip: { field: 'ip', type: dataType.STRING, allowNull: false },
        url: { field: 'url', type: dataType.STRING, allowNull: false },
        name: { field: 'name', type: dataType.STRING, allowNull: true },
        method: { field: 'method', type: dataType.STRING, allowNull: true },
        createdAt: { field: "created_at", type: dataType.DATE },
        updatedAt: { field: "updated_at", type: dataType.DATE },
    }, {
        classMethod: {},
        tableName: 'th_system_log',
        underscore: true, //카멜케이스
        timestamps: true
    });

    return systemLog;
}


