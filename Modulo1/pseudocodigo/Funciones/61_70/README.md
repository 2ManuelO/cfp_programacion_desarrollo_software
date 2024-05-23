<h2>Ejercicio 61</h2>
<h3>Suma de dos números</h3>
<pre>
    <code>
        Funcion suma <- nums(a,b)
            suma = a+b
        FinFuncion
        Algoritmo Ejercicio_61
            total = nums(5,5)
            Escribir total
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 62</h2>
<h3>Factorial de un número</h3>
<pre>
    <code>
        Funcion multi = nums(x)
            multi = 1
            para i = 1 Hasta x Hacer
                multi = multi*i
            FinPara
        FinFuncion
        Algoritmo Ejercicio_62
            multi = nums(4)
            Escribir multi
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 63</h2>
<h3>Mayor de tres números</h3>
<pre>
    <code>
        Funcion no_mayor = nums(a,b,c)
            si a > b y b > c Entonces
                no_mayor = a
            FinSi
            si b > c y b > a Entonces
                no_mayor = b
            FinSi
            si c > a y c > b Entonces
                no_mayor = c
            FinSi
        FinFuncion
        Algoritmo Ejercicio_63
            no_mayor = nums(10,15,5)
            Escribir no_mayor
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 64</h2>
<h3>Area de un circulo</h3>
<pre>
    <code>
        Funcion area = radio(r)
            multi = r*r
            area = 3.1416*multi
        FinFuncion
        Algoritmo Ejercicio_64
            area = radio(5)
            Escribir area
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 65</h2>
<h3>Potencia de un número</h3>
<pre>
    <code>
        Funcion resultado = potencia(x,z)
            multi = x
            Para i = 1 Hasta z-1 Hacer
                multi = multi * x
                resultado = multi
            FinPara           
        FinFuncion
        Algoritmo Ejercicio_65
            resultado = potencia(5,5)
            Escribir resultado
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 66</h2>
<h3>Ordenamiento de una lista</h3>
<pre>
    <code>
        Funcion orden = lista(a,b,c,d )
            Dimension matriz[4]
            matriz[1]=a
            matriz[2]=b
            matriz[3]=c
            matriz[4]=d            
            Para i=1 Hasta 6 Con Paso 1 Hacer                
                para p = i+1 Hasta 6 Con Paso 1 hacer
                FinPara
            FinPara          
            Repetir
                para i = 1 Hasta 4 Hacer
                    si matriz[i] < matriz[i+1] Entonces
                        matriz[i] = matriz[i+1]
                        matriz[i+1] = matriz[i]
                        Escribir matriz[i]
                    FinSi
                FinPara
            Hasta Que i = 4           
        FinFuncion
        Algoritmo Ejercicio_66
            orden = lista(20,5,15,10)
        FinAlgoritmo
    </code>
</pre>

<h2>Ejercicio 67</h2>
<h3>Promedio de una lista</h3>
<pre>
    <code>
    </code>
</pre>

<h2>Ejercicio 68</h2>
<h3>Inversi+on de una cadena</h3>
<pre>
    <code>
    </code>
</pre>

<h2>Ejercicio 69</h2>
<h3>Verificación de número primo</h3>
<pre>
    <code>
    </code>
</pre>

<h2>Ejercicio 70</h2>
<h3>Conversión de grados celsius a fahrenheit</h3>
<pre>
    <code>
    </code>
</pre>