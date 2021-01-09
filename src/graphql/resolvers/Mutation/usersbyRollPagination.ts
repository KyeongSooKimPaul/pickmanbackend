// import { Rawexcel } from "#root/db/models";
import { Rawexcel } from "../../../../src/db/models";

const usersbyRollPaginationResolver = (context: any, { roll, offset, limit} : {roll: string, offset:number, limit:number}) => {

  return Rawexcel.findAndCountAll({
    where : {roll : roll},
    offset : offset,
     limit: 51,
     order : [
      ['id', 'DESC']
     //['id', 'ASC']
     ],

  }).then((data:any) => {
          if(data == null){
            return new Error("이미 존재하는 이메일입니다.")
        }
        if(data !== null){
          console.log("data!!!!!!!!!!!!!!!!!!", data.count)
          return  Rawexcel.findAll({
            where : {roll : roll},
            offset : offset,
             limit: limit,
             order : [
              ['id', 'DESC']
             //['id', 'ASC']
             ],

             
            
          })
          



      }
        });




  // return User.findAll({});
};

export default usersbyRollPaginationResolver;
