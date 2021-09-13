import { useForm } from "../hooks/useForm";
import './css/formcheckout.css'
import Total from "./Total";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const initialForm={
    phone: '',
    direccion: '',
}

const validationForm=(form) =>{
    const regexPhone =  /^\d*(\.\d+)?$/
    const error ={}

    if(!form.phone?.trim()){
        error.phone = 'Telefono es requerido'
    } else if (!regexPhone.test(form.phone.trim())){
        error.phone = 'Solo numeros'
    } else if(!form.direccion?.trim()){
        error.direccion = 'Direccion es requerido'
    }
    return error
}

const FormCheckOutAuth = () => {
    const {form,error,loading,response,handleChange,handleBlur,handleSubmitAuth,orderId} = useForm(initialForm, validationForm)
    const disabledBoton = Object.keys(error).length ===0
    return (
        <>   
        {!response?
        <div className='formcheckout'>
            <Total/>
            <div className='formulario'>
                <h2>Rellena con tus datos</h2>
                <form onSubmit={handleSubmitAuth}>
                    <label htmlFor='phone'>Telefono:</label>
                    <input
                        className='formulario__input'
                        id='phone'
                        type='text' 
                        name='phone'  
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.phone}                     
                        />
                    {error.phone && <p>{error.phone}</p>}
                    <label htmlFor='direccion'>Direccion:</label>
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

export default FormCheckOutAuth
