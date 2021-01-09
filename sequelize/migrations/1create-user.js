module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "users",
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      roll: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      active: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      backdata: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      businessname: {
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

module.exports.down = (queryInterface) => queryInterface.dropTable("users");
