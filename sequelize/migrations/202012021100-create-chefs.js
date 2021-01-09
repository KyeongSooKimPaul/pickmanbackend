//module.exports.up = 데이터 생성
//module.exports.down = 데이터 삭제
module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "chefs",
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
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

module.exports.down = (queryInterface) => queryInterface.dropTable("chefs");
