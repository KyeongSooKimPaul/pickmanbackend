
// import { User } from "../../../../src/db/models";






// const usersbyIdResolver = (context: any, { id, offset, limit} : {id: string, offset:number, limit:number}) => {

// return User.findAndCountAll({
//   where : {id : id},
//   offset : offset,
//    limit: 51,
//    order : [
//     ['id', 'DESC']
//    //['id', 'ASC']
//    ],

// }).then((data:any) => {
//         if(data == null){
//           return new Error("이미 존재하는 이메일입니다.")
//       }
//       if(data !== null){
//         console.log("datadata", data)
//         return User.findAll({
//           where : {id : id},
//           offset : offset,
//            limit: limit,
//            order : [
//             ['id', 'DESC']
//            //['id', 'ASC']
//            ],
         
          
//         })
//     }
//       });





// };

// export default usersbyIdResolver;


import { Rawexcel } from "../../../../src/db/models";






const usersbyIdResolver = (context: any, { userId, offset, limit} : {userId: string, offset:number, limit:number}) => {

return Rawexcel.findAndCountAll({
  where : {userId : userId},
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
        console.log("datadata", data.count)
        return Rawexcel.findAll({
          where : {userId : userId},
          offset : offset,
           limit: limit,
           order : [
            ['id', 'DESC']
           //['id', 'ASC']
           ],
           ...data.count
         
          
        })


        
    }
      });





};

export default usersbyIdResolver;

