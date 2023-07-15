
console.log('worker.js')

self.addEventListener('push', e => {
    console.log('notification recived');
    const data = e.data.json()
    console.log(data)
    self.registration.showNotification("Powermeter", {
        body: data.message,
        icon: 'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000'
    });

})

