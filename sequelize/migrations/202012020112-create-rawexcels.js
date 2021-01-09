//module.exports.up = 데이터 생성
//module.exports.down = 데이터 삭제
module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "rawexcels",
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      userId: {
        allowNull: true,
        references: {
          key: "id",
          model: "users",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      url: {
        allowNull: true,
        type: DataTypes.STRING,
      },

      date: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      code: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      color: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      size: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      amount: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      total: {
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
      roll: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (queryInterface) => queryInterface.dropTable("rawexcels");
