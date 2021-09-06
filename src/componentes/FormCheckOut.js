import { useForm } from "../hooks/useForm";
import './css/formcheckout.css'
import Total from "./Total";

const initialForm ={
    name:'',
    lastname:'',
    email:'',
    phone:'',
    emailcopia:'',
}

const validacionForm=(form) =>{
    let error ={}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    let regexTelefono 

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
        error.emailcopia = 'Tu email debe ser igual en ambos campos'
    } else if(!form.phone?.trim()){
        error.phone = "'telefono' es requerido"
    }

    return error
}

const FormCheckOut = () =>{
    const {form,error,loading,response,handleChange,handleBlur,handleSubmit,orderId} = useForm(initialForm, validacionForm)

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
                    <button type='submit' className='formulario__button'> Finalizar compra</button>
                </form>
                
            </div>
        </div>
        :
        <div className='order'>
            <p>Gracias por tu id de compra es {orderId}</p>
        </div>}
        </>
    )
}

export default FormCheckOut