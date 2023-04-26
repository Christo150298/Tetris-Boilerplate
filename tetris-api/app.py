from flask import Flask, jsonify, render_template, request
from src.database import db
from src.admin import setup_admin
from src.routes import api
from flask_socketio import SocketIO, emit
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager


# INICIAMOS APP
app = Flask(__name__)

# Iniciamos la blueprint "api"
app.register_blueprint(api, url_prefix='/api')

# Iniciamos el admin
setup_admin(app)

# Configuracion BBDD 
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///tetrisonline.db"
db.init_app(app)


# Configuracion y migracion de las tablas de la BBDD (Si no estan creadas)
migrate = Migrate(app, db)


# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)



# Configuracion socketIO
app.debug = True
app.config["SECRET_KEY"] ='secret'
socketio = SocketIO(app,cors_allowed_origins="*")





#PARTE PARA RUTAS DE SOCKETS
@app.route("/")
def http_call():
    data = {'data':'This text was fetched using an HTTP call to server on render'}
    return jsonify(data)


@socketio.on("connect")
def connected():
    """event listener para conectarse al servidor"""
    print(request.sid)
    print("Un cliente se ha conectado")
    emit("connect",{"data":f"id: {request.sid} is connected"})


@socketio.on('data')
def handle_message(data):
    """event listener para cuando el cliente escribe un mensaje"""
    print("data from the front end: ",str(data))
    emit("data",{'data':data,'id':request.sid},broadcast=True)


@socketio.on("disconnect")
def disconnected():
    """event listener para desconectarse del servidor"""
    print("El cliente se ha desconectado")
    emit("disconnect",f"user {request.sid} disconnected",broadcast=True)


## NO ESCRIBIR CODIGO DEBAJO DE ESTA LINEA.
if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", port=3245)