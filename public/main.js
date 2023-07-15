

console.log("entra en main")

const PUBLIC_VAPID_KEY = "BPgbqb7lH8YqIOYcevD8XTL1Q3i7zA7qob3ymR0SyoOTts14XcrqagZbVrl9r7B10TMPjg-dFwBvygyuB6HtnMs"

// function urlBase64ToUint8Array(base64String) {
//     var padding = '='.repeat((4 - base64String.length % 4) % 4);
//     var base64 = (base64String + padding)
//         .replace(/\-/g, '+')
//         .replace(/_/g, '/');

//     var rawData = window.atob(base64);
//     var outputArray = new Uint8Array(rawData.length);

//     for (var i = 0; i < rawData.length; ++i) {
//         outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
// }

const subscription = async () => {

    //SERVICE WORKER
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })

    console.log("new service worker")

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY
    });

    await fetch('http://localhost:8082/subscription',
        {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    console.log("subscripto")
}

subscription()