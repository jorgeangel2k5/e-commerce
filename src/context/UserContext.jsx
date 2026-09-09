import { createContext,  useState, useEffect } from 'react';
import { usuarios } from '../data/usuarios';


export const UserContext = createContext();


export const UserProvider=({children})=>{
    const[user, setUser]= useState(()=>{
    const guardarUser= localStorage.getItem('user');
    return guardarUser ? JSON.parse(guardarUser):null;
});

useEffect(() => {
  if (user){
    localStorage.setItem('user',JSON.stringify(user));
  }
   else  {
    localStorage.removeItem('user');
  }
},[user]);

const login = (email, password)=> {
const   usuarioEcontrado= usuarios.find((usuario)=>  usuario.email === email && usuario.password === password
);
if (usuarioEcontrado){
const userData ={
    id: usuarioEcontrado.id,
    usuario: usuarioEcontrado.usuario,
    email: usuarioEcontrado.email,
    rol: usuarioEcontrado.rol,
};
setUser(userData);
    return { success: true };
}
else {
    return { success: false, message: 'Credenciales incorrectas' };
}
}


const logout = ()=>{
    setUser(null);
}

return(

<UserContext.Provider value={{user, login, logout}}>
{children}

</UserContext.Provider>

);
};