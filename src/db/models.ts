  
import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table
  } from "sequelize-typescript";
  

  @Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "users"
  })

  export class User extends Model<User> {
    @Column({
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
  
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    email!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    password!: string;
  
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    roll!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    active!: string;
    
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    backdata!: string;
    


    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    businessname!: string;
    

    @HasMany(() => Rawexcel)
    rawexcels!: Rawexcel[];

  }




  @Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "chefs"
  })

  export class Chef extends Model<Chef> {
    @Column({
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
  
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    name!: string;
  
    @HasMany(() => Restaurant)
    restaurants!: Restaurant[];
  }
  
  @Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "restaurants"
  })

  export class Restaurant extends Model<Restaurant> {
    @Column({
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
  
    @Column({
      allowNull: true,
      type: DataType.INTEGER.UNSIGNED
    })
    @ForeignKey(() => Chef)
    chefId!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    name!: string;
  
    @BelongsTo(() => Chef)
    chef!: Chef;
  }
  
  @Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "rawexcels"
  })

  export class Rawexcel extends Model<Rawexcel> {
    @Column({
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
  
    @Column({
      allowNull: true,
      type: DataType.INTEGER.UNSIGNED
    })
    @ForeignKey(() => User)
    userId!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    date!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    name!: string;
    
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    address!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    phone!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    code!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    color!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    size!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    price!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    amount!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    total!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    roll!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    email!: string;

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    url!: string;


    @BelongsTo(() => User)
    user!: User;

  }

  @Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] }
    },
    paranoid: true,
    tableName: "bankdatas"
  })

  export class Bankdata extends Model<Bankdata> {
    @Column({
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
  

    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    userId!: string;



    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    seller!: string;


    
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    wholesaler!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    bankcode!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    bankaccount!: string;
      
    @Column({
      allowNull: true,
      type: DataType.STRING
    })
    bankowner!: string;


  }

  export default [Chef, Restaurant, Rawexcel, User, Bankdata];