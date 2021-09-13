import { useForm } from "../hooks/useForm";
import './css/formcheckout.css'
import Total from "./Total";
import Loader from "./Loader";
import { Link } from "react-router-dom";


const initialForm ={
    name:'',
    lastname:'',
    email:'',
    phone:'',
    emailcopia:'',
    direccion:''
} 


const validationForm=(form) =>{
    const error ={}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    const regexTelefono =  /^\d*(\.\d+)?$/

    if(!form.name?.trim()){
        error.name = "'nombre' es requerido"
    } else if(!regexName.test(form.name.trim())){
        error.name = "Solo se aceptan letras y espacios"
    } else if(!form.lastname?.trim()){
        error.lastname = "'apellido' es requerido"
    } else if(!regexName.test(form.lastname.trim())){
        error.lastname = "Solo se aceptan letras y espacios"
    } else if(!form.email?.trim()){
        error.email = "'email' es requerido"
    } else if(!regexEmail.test(form.email.trim())){
        error.email = "Tu email es incorrecto"
    } else if(!form.emailcopia?.trim()){
        error.emailcopia = "'verificacion email' es requerido"
    } else if (form.emailcopia !== form.email){
        error.emailcopia = 'Tu email no coincide'
    } else if(!form.phone?.trim()){
        error.phone = "'telefono' es requerido"
    } else if(!regexTelefono.test(form.phone.trim())){
        error.phone = 'solo numeros'
    } else if(!form.direccion?.trim()){
        error.direccion = 'Provincia y ciudad es requerido'
    }

    return error
}

const FormCheckOut = () =>{
    const {form,error,loading,response,handleChange,handleBlur,handleSubmit,orderId} = useForm(initialForm, validationForm)
    const disabledBoton = Object.keys(error).length ===0

    return(
        <>   
        {!response?
        <div className='formcheckout'>
            <Total/>
            <div className='formulario'>
                <h2>Rellena con tus datos</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Nombre:</label>
                    <input
                        className='formulario__input'
                        id='name'
                        type='text' 
                        name='name'  
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.name}                     
                        />
                    {error.name && <p>{error.name}</p>}
                    <label htmlFor='lastname'>Apellido:</label>
                    <input 
                        className='formulario__input'
                        id='lastname'
                        type='text' 
                        name='lastname' 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.lastname}
                    />
                    {error.lastname && <p>{error.lastname}</p>}
                    <label htmlFor='email'>email:</label>
                    <input 
                        className='formulario__input'
                        id='email'
                        type='email' 
                        name='email' 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.email}                    
                        />
                    {error.email && <p>{error.email}</p>}
                    <label htmlFor='confirmarEmail'>Confirmar Email:</label>
                    <input 
                        className='formulario__input'
                        id='confirmarEmail'
                        type='email' 
                        name='emailcopia' 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.emailcopia}                     
                        />
                    {error.emailcopia && <p>{error.emailcopia}</p>}
                    <label htmlFor='telefono'>Telefono:</label>
                    <input
                        className='formulario__input' 
                        id='telefono'
                        type='text' 
                        name='phone' 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.phone} 
                    />
                    {error.phone && <p>{error.phone}</p>} 
                    <label htmlFor='direccion'>Direccion</label>
                    <input
                        className='formulario__input' 
                        id='direccion'
                        type='text' 
                        name='direccion' 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.direccion} 
                    />
                    {error.direccion && <p>{error.direccion}</p>} 
                    <button type='submit' className='formulario__button' disabled={!disabledBoton}> Finalizar compra</button>
                </form>
                
            </div>
        </div>
        
        :

        <div className='order'>
            {loading? <Loader/>: 
            <div> 
                <p>Gracias por tu compra, la id de tu orden es {orderId}</p> 
                <Link to='/'><button className="order__btn">Volver al menu</button></Link>
            </div>}
        </div>}
        </>
        
    )
}

export default FormCheckOut