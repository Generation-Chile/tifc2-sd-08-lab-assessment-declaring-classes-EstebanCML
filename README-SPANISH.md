# Instrucciones
Las clases son una sintaxis alternativa para definir una **plantilla** para construir objetos. Al igual que las funciones constructoras, se pueden utilizar para construir objetos con su **propio** conjunto de propiedades y métodos. Al igual que los prototipos, también permiten que los objetos los **hereden** . **Los métodos constructores** de clases se utilizan para crear una instancia de una clase. **Los métodos compartidos** son heredados por cada instancia.

**¡Hoy definirás clases, inicializarás objetos con propiedades y actuarás sobre esas propiedades con métodos!**

Para cada una de estas tareas, creará e iterará su solución para la tarea anterior.
## Tareas

1. Estás trabajando en un código que se utilizará en un videojuego. Se le ha pedido que cree una clase de objeto. Estos se utilizarán para definir a los jugadores en ese juego. Cada Player podrá elegir su propio nombre, y estos objetos servirán para almacenarlo.
    * Modifique la clase Player para que acepte un **" name "** de Player en un argumento.
        * La clave de esta propiedad en el objeto resultante debe ser " name". Recuerde, **¡las computadoras son muy literales !**


2. Ahora se le ha pedido que mejore su código para que los objetos del Player puedan definir tanto un nombre como un número de nivel.
    * Modifique la clase Player para que acepte una cadena de "name del Player y un número de **" level"** en dos argumentos separados.
        * La clave de esta propiedad en el objeto resultante debe ser " level". Recuerde, **¡las computadoras son muy literales !**


3. Ahora se le ha pedido que incluya un método que generará una cadena en la consola anunciando un nivel superior.
    * Modifique la clase Player para que acepte una cadena de “name” de Player y un número de nivel en dos argumentos separados.
    * Luego, defina un método de objeto compartido info() que imprimirá la siguiente cadena, reemplazando los dos marcadores de posición:
        * <name> has reached Level <level>!
            * Un Player llamado **Tar** en el nivel **6** debería imprimir " Tara has reached Level 6!" en la consola.


4. Ahora se te ha pedido que incluyas un método para subir de nivel a un Player, aumentando su número de nivel en uno.
    * Modifique la clase Player para que acepte una cadena de name de Player y un número de nivel en dos argumentos separados.
    * Luego, defina un método de objeto compartido info()que generará la siguiente cadena:
        * <name> has reached Level <level>!
    * Finalmente, defina un segundo método de objeto compartido llamado levelUp()que **incrementará en 1** el nivel del Player.


## Tareas adicionales

Si ha completado las tareas anteriores, pruebe las siguientes tareas adicionales para **experimentar** más.

5. Experimente permitiendo que el Player suba de nivel según los puntos de experiencia obtenidos.
    * Un punto de experiencia es un **number** . Un nivel debe ocurrir cuando un Player gana suficientes puntos de experiencia.
    * Intente agregar un método que permita a un Player ganar una cantidad determinada de puntos de experiencia.
    * ¿Cuántos puntos de experiencia deberían resultar en un nivel superior? ¿Cómo puedes realizar un seguimiento de este número?


6. Experimente permitiendo que se agreguen objetos de Player construidos a una **variedad** de miembros del grupo.
    * ¿Cómo se debe identificar una serie de miembros del partido en su código?
    * Intente agregar métodos para agregar o eliminar objetos de Player de un grupo determinado.


7. Experimente permitiendo al Player tener un inventario de elementos.
    * Intente agregar métodos para agregar o eliminar artículos de un inventario.
    * ¿Cómo puedes realizar un seguimiento de la cantidad de cada artículo?
    * ¿Qué **estructura de datos** necesitarías para esto?
