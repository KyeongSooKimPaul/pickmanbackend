//module.exports.up = 데이터 생성
//module.exports.down = 데이터 삭제
module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "bankdatas",
      {
        id: {
          allowNull: true,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },
        userId: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        seller: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        wholesaler: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        bankcode: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        bankaccount: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        bankowner: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
         },
      {
        charset: "utf8",
      }
    );
  };
  
  module.exports.down = (queryInterface) => queryInterface.dropTable("bankdatas");
  