import { Request, RequestHandler, Response } from "express";
import { OkPacket, RowDataPacket } from "mysql2";
import database from "../../database";

interface MySQLInsertResult extends OkPacket {
  affectedRows: number;
  insertId: number;
}

export const createUser: RequestHandler = (req, res) => {
  const { email } = req.body;
  database
    .query<MySQLInsertResult>("INSERT INTO users (email) VALUES (?)", [email])
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(400).send("Movie could not be created.");
      } else {
        const newUserID = result[0].insertId;
        res.location(result[0].insertId.toString()).sendStatus(201);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

interface MySQLUserPacket extends User, RowDataPacket {}

// Refer to this to get more info on Generics:
// https://www.typescriptlang.org/docs/handbook/2/generics.html
export const getUserByID: RequestHandler<{
  userId: string;
}> = (req, res) => {
  const { userId } = req.params;

  database
    .query<MySQLUserPacket[]>("SELECT * FROM users WHERE id = ?", [userId])
    .then(([result]) => {
      const user = result[0];
      console.log("User ID:", user.id, "User email:", user.email);
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

export const getAllUsers = (req: Request, res: Response) => {

} 