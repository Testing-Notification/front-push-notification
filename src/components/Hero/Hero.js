import "./Hero.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const PUBLIC_VAPID_KEY = "BPgbqb7lH8YqIOYcevD8XTL1Q3i7zA7qob3ymR0SyoOTts14XcrqagZbVrl9r7B10TMPjg-dFwBvygyuB6HtnMs"


const Hero = () => {
  const state = useSelector(state => state)

  // const subscription = async () => {
  //   //SERVICE WORKER
  //   const register = await navigator.serviceWorker.register('/worker.js', {
  //     scope: '/'
  //   })
  //   console.log("new service worker")

  //   const subscription = await register.pushManager.subscribe({
  //     userVisibleOnly: true,
  //     applicationServerKey: PUBLIC_VAPID_KEY
  //   });

  //   axios.post('http://localhost:8082/subscription',
  //     subscription
  //   )
  //     .then(function (response) {
  //       console.log(response.data);
  //     })

  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   console.log("subscripto")
  // }

  // subscription()
  return (
    <div className="cmp-hero">
      {/* //el hero es la cara principal superior aca van todos los compoentes q van en el hero */}

      <h1>
        App de prueba notificación!
      </h1>

      <div >
        Una vez q ingresas a esa app el back recibe tus datos para poder mandarte mensajes a tu navegador directo desde el back sin estar conectado a la aplicación web!
      </div>

      <input placeholder="Nombre de usuario" />
      
      {/* <button onClick={subscription}>
        SendPost
      </button> */}


    </div>
  );
};

export default Hero;
