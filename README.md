# nodetp


##Api:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /sites/  {retorna los sitios a elegir}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /sites/:id/payment_methods  {retorna los metodos de pago a elegir del sitio :id}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /sites/:id/payment_methods/method_id  {retorna las agencias que reciben :mehod_id en forma de pago, del site :id}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; params: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; longitud - obligatorio

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; latitud - obligatorio

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; radio - obligatorio

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order - opcional

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; order_crit - opcional


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /agencies/  {Asi solo no retorna nada}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /agencies/saved_agencies (POST) {Guarda agencias en la BD}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /agencies/saved_agencies (GET) {Retorna las agencias guardadas en bd}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /agencies/delete_agencies (GET) {Borra las agencias recibidas y las agencias guardadas en bd}



**npm install** para instalar requerimentos

**npm start** para inciar la api




##Front

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;{Podra elegir el site y el metodo de pago.}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /agencies &nbsp;&nbsp;&nbsp;{obtendra las agencias de acuerdo a la latitud longitud y radio deseados si se accede desde / sera con el site y el metodo elegido, si se entra asi directo, por default sera MLA y rapipago}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /saved_agencies &nbsp;&nbsp;&nbsp;{Lista de agencias guardadas, donde podra eliminar las que no desee guardar}


**para instalar:**

cd agencies_front/

**npm install**

**ng serve**



Acceeer desde **localhost:4200/**

