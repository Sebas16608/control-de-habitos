import User from "./user";
import Habits from "./habit";

User.hasMany(Habits, {
    foreignKey: "userId",
    as: "habits"
});

Habits.belongsTo(User, {
    foreignKey: "userId",
    as: "habits"
});