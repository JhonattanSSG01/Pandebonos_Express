#Bienvenidos al mundo de los manjares de Colombia👋👋!!!
#Pandebono Express 🤤😋

 ![image](https://user-images.githubusercontent.com/80645321/210125560-368699c5-8ae7-4ef0-9ad7-6017faae6c6e.png)

Esta aplicación web se enfoca principalmente en solicitudes de pedido a la microempresa Pandebono Express , donde se visualizará la misión que tiene la microempresa y sus diferentes productos que comercializan en puntos de cadena en toda Bogotá D.C, usuarios comunes o compañías para temporadas especiales. Igualmente, hay una sección de preguntas frecuentes para que los clientes se informen sobre algunas inquietudes comunes, esas inquietudes también se pueden requerir directamente con el WhatsApp de la organización.

Por último,  el cliente tiene la capacidad de ir agregando productos al carrito, verificar los productos agregados, estos tienen la posibilidad de eliminarlos del todo, agregar y disminuir las cantidades del producto para finalmente solicitar el pedido por medio del WhatsApp.
Puedes visualizar la página 👉👉  https://pandebono-express.netlify.app

##Inicio del proyecto 💢
Principalmente, se inicia el proyecto de React con el comando create-react-app my-name, el cual nos ayuda a instalar todos los paquetes necesarios para que funcione correctamente la aplicación.


##Estructura de rutas generales 💯
 
![image](https://user-images.githubusercontent.com/80645321/210125569-6522d2cc-18dd-4252-a34c-655f06394a5c.png)
 
Prácticamente en esta parte del código se crean las diferentes rutas que tendrá nuestra aplicación, antes de poder usar los comando y métodos para configurar esas rutas, tenemos que instalar ese paquete con npm install react-router-do.
React Router es una librería que se utiliza bastante con React y que nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación. Al igual que el propio React, esta librería usa una metodología declarativa en vez de imperativa.

![image](https://user-images.githubusercontent.com/80645321/210125579-8302ae21-ee2c-4ed8-b87e-c6877743113e.png)
![image](https://user-images.githubusercontent.com/80645321/210125586-ae7f8f09-9684-465b-b8cc-d84cdbe1d462.png)

En la librería React Router tiene un componente Link que son ayuda a facilitar la navegación mediante click.

Header de la APP 🔸

![image](https://user-images.githubusercontent.com/80645321/210125594-2b766937-e534-4e13-8d8e-627a2937a518.png)

 
Este componente incluye la parte del encabezado de la aplicación, se logra visualizar en este componente que tenemos un menú desplegable para dispositivos móviles y cuando están en dispositivos como Tablet o Desktop se visualiza ya con los diferentes enlaces. Al principio me consto mucho realizar los enlaces con otros componentes puesto que, no entendía muy bien cómo se utilizaba la librería que nos provee esa facilidad de navegación, Al final fue lo más sencillo que se realizó gracias a ver videos y leer un poco la documentación de esta librería. 
Desktop y Tablet

![image](https://user-images.githubusercontent.com/80645321/210125612-22bfdc44-d01d-4795-a7ef-8f1db5908999.png)

Mobile 

![image](https://user-images.githubusercontent.com/80645321/210125615-b697a1c0-e831-4127-8f9c-de34d07dd93d.png)
 
##Home de la APP 🔸
 
![image](https://user-images.githubusercontent.com/80645321/210125622-7ad78ee9-a172-4686-8454-b2a44b6f9e57.png)

Este componente incluye la parte de la página de inicio de la aplicación, se logra visualizar en este componente que hacemos el llamado del componente <Header/ > y <Footer/> para que estos se visualize correctamente, para que esto funcione toca importer dichos componentes y se utilizan como etiquetas HTML gracias a que react tiene la extencion de XML que significa Lenguaje Demarcado Extendible.

![image](https://user-images.githubusercontent.com/80645321/210125624-753a4067-87e0-4c62-9799-e4b5f98ff211.png)

 
##Footer de la APP 🔸

![image](https://user-images.githubusercontent.com/80645321/210125630-c31a6bb2-6df7-4341-92df-46b724b94ec1.png)
 
Este componente incluye la parte del footer de la aplicación, se logra visualizar en este componente que se maneja dos componentes que se exportan individualmente ya que, en mi aplicación utilizo dos diferentes footers para el inicio y el general. Como se observa en la imagen anterior, se realiza el general y ese componente se llama en el segundo para poder reutilizar toda esa estructura.

Footer Inicio
 
![image](https://user-images.githubusercontent.com/80645321/210125633-5c441469-c621-4b48-b3d0-5494b9995b7a.png)
 
Footer General

![image](https://user-images.githubusercontent.com/80645321/210125636-d156b731-e280-40e9-917c-6ce523f8963c.png)


##Producst y Categories de la APP 🔸

![image](https://user-images.githubusercontent.com/80645321/210125643-8bce9283-fde0-4cc3-9fde-e660f97e3052.png)

Este componente incluye la parte de los filtros de los productos disponibles actualmente de la aplicación, se logra visualizar en este componente que hacemos el llamado del componente <Header/ > y <FooterAll/> para que estos se visualize correctamente, para que esto funcione toca importer dichos componentes y se utilizan como etiquetas HTML gracias a que react tiene la extencion de XML que significa Lenguaje Demarcado Extendible.
Gracias al useState y el método filter de los arrays, nos ayuda a filtrar los productos por categoría cada vez que se da click al botón requerido, este realiza un evento onClick y así se logra actualizar los productos de dicha categoría. 

![image](https://user-images.githubusercontent.com/80645321/210125653-c7fc0cb0-c074-4457-a11d-bad0f91e19de.png)
 
De igual manera damos uso de la librería Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones. Es comúnmente usada con otras librerías como React o Angular para la construcción de Interfaces de Usuario. Se uso esta librería para poder manipular los estados requeridos para la correcta funcionalidad del carrito de compras.

![image](https://user-images.githubusercontent.com/80645321/210125658-eb54ca80-0f44-4f4c-a8a9-f61236ad10ae.png)
 
##CartBuy de la APP 🔸

![image](https://user-images.githubusercontent.com/80645321/210125660-6a9c7ed5-24b2-40c5-8855-19169e7d3bcd.png)
 
Este componente incluye la parte de los productos agregados en el carrito de compras, se logra visualizar en este componente que hacemos el llamado del componente <Header/ > y <FooterAll/> para que estos se visualize correctamente.
Gracias al useSelector, dispatch y el método map de los arrays, nos ayuda a depende del evento llegue, este incrementa o decrementa las cantidades, depura el producto y se visualiza el precio y el total del pedido.

Además, se hizo uso de la librería ReactWhatsapp, la caul nos ayuda a conectar con el API de WhatsApp y se usa igual que un componente de react, pero las propiedades que se requieren son el número del WhatsApp de la organización para la correcta vinculación con el chat y el mensaje que llevará dicha solicitud.


![image](https://user-images.githubusercontent.com/80645321/210125673-393f350a-08c1-421a-a075-c4be234c2734.png)
![image](https://user-images.githubusercontent.com/80645321/210125676-91ded0fb-8ed0-4e43-97f3-6faa08721d09.png)

 

