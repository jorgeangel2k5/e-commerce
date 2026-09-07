import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const [errorLogin, setErrorLogin] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const resultado = login(data.email, data.password);

    if (resultado.success) {
      setErrorLogin('');
      navigate('/');
    } else {
      setErrorLogin(resultado.message);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-black p-4'>
      <article className="bg-zinc-800 w-full max-w-md rounded-2xl p-8 shadow-xl">
        <header className="text-center mb-6">
          <h1 className="text-amber-600 text-4xl font-bold">Iniciar Sesión</h1>
        </header>     
    
        <section className="flex flex-col gap-6 border-t border-zinc-700 pt-6">
          {/* Cartel de error si falla la autenticación */}
          {errorLogin && (
            <p className="bg-red-500/10 border border-red-500 text-red-400 p-2 rounded-xl text-center text-sm">
              {errorLogin}
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-left gap-3">
            <div>
              <label className="text-amber-50 block mb-1">Correo: </label>
              <input 
                type="email"
                placeholder="tu@email.com"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500" 
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Formato de correo inválido"
                  }
                })}  
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <label className="text-amber-50 block mb-1">Contraseña: </label>
              <input 
                type="password"
                placeholder="••••••••"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none transform-flat focus:border-amber-500"
                {...register("password", {
                  required: "El campo es obligatorio"
                })}
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
            </div>
            
            <div className="mt-2">
              <button type="submit" className='bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl p-2 w-full cursor-pointer transition-colors'>
                Iniciar
              </button>
            </div>
          </form>

          <article className="flex flex-col text-center items-center pt-4 border-t border-zinc-700">
            <div className="w-full flex flex-col gap-3">
              <h2 className="text-amber-50 text-sm">Si aún no sos usuario, registrate</h2>
              <div>
                <button 
                  type="button"
                  onClick={() => navigate('/registro')}
                  className='bg-zinc-700 hover:bg-zinc-600 text-amber-50 rounded-xl p-2 w-full cursor-pointer transition-colors'
                >
                  Registrate
                </button>
              </div>  
            </div>
          </article>
        </section>
      </article>
    </div>
  );
};

export default Login;