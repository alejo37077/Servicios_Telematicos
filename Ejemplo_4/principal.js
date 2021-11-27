const {users,edad,tiempo,veces}=require('./secundario');

var nombre='JAIDER';

for(var i=0;i<users.length;i++){
    if(users[i]==nombre){
        console.log(users[i]+'\n'+edad[i]+'\n'+tiempo[i]+'\n'+veces[i]);
    }
}



