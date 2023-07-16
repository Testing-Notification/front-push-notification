import "./Hero.scss";
// import { useSelector } from "react-redux";
import axios from "axios";
// import { useEffect,useState } from "react";

const PUBLIC_VAPID_KEY = "BPgbqb7lH8YqIOYcevD8XTL1Q3i7zA7qob3ymR0SyoOTts14XcrqagZbVrl9r7B10TMPjg-dFwBvygyuB6HtnMs"
let register
let input_name

const Hero = () => {
  // const state = useSelector(state => state)

  const handleChandeInput = (e) => {
    input_name = e.target.value
  }



  //SERVICE WORKER
  const registerUser = async () => {
    register = await navigator.serviceWorker.register('/worker.js', {
      scope: '/'
    })
  }
  registerUser()

  const subscription = async () => {

    console.log("new service worker")

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: PUBLIC_VAPID_KEY
    });

    let objPost = {
      name: input_name,
      subscription: subscription,
    }

    await axios.post('https://19fc-190-247-202-60.ngrok-free.app/subscription',
      objPost
    )
      .then(function (response) {
        // console.log(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });

    console.log("subscripto")
    
    alert("te logueaste con exito")
  }


  return (
    <div className="cmp-hero">
      {/* //el hero es la cara principal superior aca van todos los compoentes q van en el hero */}

      <h1>
        App de prueba notificación!
      </h1>

      <div >
        Una vez q ingresas a esa app el back recibe tus datos para poder mandarte mensajes a tu navegador directo desde el back sin estar conectado a la aplicación web!
      </div>

      <input onChange={handleChandeInput} placeholder="Nombre de usuario" />

      <button onClick={subscription}>
        Loguear
      </button>
    </div>
  );
};

export default Hero;
