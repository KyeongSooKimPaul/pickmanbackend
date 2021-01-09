module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "restaurants",
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      chefId: {
        allowNull: true,
        references: {
          key: "id",
          model: "chefs",
        },
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

module.exports.down = (queryInterface) =>
  queryInterface.dropTable("restaurants");
