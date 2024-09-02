Aplicando rutas
=============
- Este proyecto lo estoy realizando dentro del curso **Front End III** de la carrera [Certified Tech Developer](https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer "Certified Tech Developer") 
- **Periodo :** Julio - Septiembre 2024
> En este proyecto se practica react

Ahora que ya tenemos vinculada nuestra app con la URL del browser, vamos a definir los
links que redirigiran desde nuestra página home hacia las demás “rutas”.

**Links**

Para trabajar con links utilizaremos el componente **< Link />** de React Router en vez de utilizar la etiqueta **<a/ >** nativa de HTML. ¿En qué se diferencian?

La principal diferencia radica en que el tag **< a />** efectivamente cambia la ruta que se muestra en el browser, pero lo hace de la manera “antigua” o tradicional, recargando toda la página.
En cambio, **< Link />** nos permitirá cambiarla URL sin “movernos'' verdaderamente de la página en que estamos, modificando el contenido en pantalla.

Cada Link marca la dirección hacia una “ruta”. El nombre de la ruta será especificado dentro del atributo to.

Incluso si probamos con nuestros Links, ahora mismo podríamos ver que efectivamente ya se produce un cambio en la URL de la página, solo que sin recarga alguna:

De todas formas, como se habrán dado cuenta, a pesar de que cambiamos la URL, nada pasó realmente en nuestra app. Esto se debe a que aún no terminamos de configurar nuestra app para que realice el “cambio” de vistas. ¡Vayamos a hacerlo!

**Rutas**

Como dijimos anteriormente, estamos en una SPA y, a pesar de que cambie la URL del browser, lo único que verdaderamente modificaremos es la “vista” de nuestra página para el usuario. Actualmente, tenemos cubierto el primer apartado, pero todavía no le dijimos a nuestra app qué componentes queremos que renderice en cada vista.

Routes será el wrapper que envuelva cada una de nuestras rutas y Route será el componente que utilizaremos para definir cuándo y qué vamos a renderizar en cada URL.
De la misma manera que con el componente Link especificamos en el atributo to la dirección a la que queremos redirigirnos, ahora con path indicamos qué ruta debe matchear para mostrar cierto componente o “vista”. El componente en sí lo especificamos en el atributo
element.

**<Route path='/home' element={<Home/>} />**

Con este fragmento le indicamos ahora a React Router que cuando la URL matchee con /home, renderice el elemento (o componente) Home.

Volvamos a probar nuestros links. Ahora, por cada ruta (indicada en el atributo path), se renderiza el componente que especificamos

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">