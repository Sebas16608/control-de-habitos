import sequelize from "../config/database";
import { DataTypes, Model } from "sequelize";

class Habits extends Model{
    declare id?: number;
    declare userId: number;
    declare title: string;
    declare description: string;
};

Habits.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "User",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            len: [1, 255],
        },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    tableName: "Habits",
    freezeTableName: true

});

export default Habits;